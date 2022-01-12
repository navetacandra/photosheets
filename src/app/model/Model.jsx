import { v4 as uuidv4 } from 'uuid';
import firebase from '../config/firebase.config'
import { redirect } from '../config/app';
import { useEffect } from 'react'
import { verify } from './mailer'


let uri = `${window.location.protocol}//${window.location.host}`

function RegisterUser(email, password, name) {
    firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
            sessionStorage.setItem('success-alert', 'Account Created!||, Please validate your email!')
            let token = uuidv4()
            verify(email, `${uri}/auth/verify/${res.user.uid}/${token}`)

            firebase.database().ref('users/' + res.user.uid).set({
                uid: res.user.uid,
                name: name,
                email: email,
                profilePict: 'https://firebasestorage.googleapis.com/v0/b/photosheets.appspot.com/o/profilePict%2FDefaultUser.jpg?alt=media&token=78c7b801-5793-4ffe-8b7b-cebfc8c0cb33',
                isVerify: false,
                token: token
            }).then(() => {
                firebase.auth().signOut()
                redirect('/')
            })
        })
        .catch(err => {
            if (err.code === 'auth/weak-password') {
                document.querySelector('#err-reg').innerHTML = "Password should be at least 6 characters!"
            }

            if (err.code === 'auth/email-already-in-use') {
                document.querySelector('#err-reg').innerHTML = "Email is already in use by another user!"
            }

            if (err.code === 'auth/invalid-email') {
                document.querySelector('#err-reg').innerHTML = "Email is invalid!"
            }

            if (err.code === 'auth/network-request-failed') {
                document.querySelector('#err-reg').innerHTML = "You must online to register!"
            }

        })
}

function LoginUser(email, password) {
    firebase.database().ref('users').on('value', res => {
        let d = Object.values(res.val()).filter(f => f.email === email)[0]
        if (!d.isVerify) {
            document.getElementById('err-log').innerHTML = "User is not activated!"
        } else {
            firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .then(res => {
                    firebase.database().ref('users/' + res.user.uid)
                        .on("value", response => {
                            let data = response.val()
                            let user = {
                                email: data.email,
                                name: data.name,
                                profilePict: data.profilePict,
                                uid: data.uid,
                                active: data.isVerify
                            }
                            localStorage.setItem('user', JSON.stringify(user))
                            redirect('/')
                        })
                })
                .catch(err => {
                    if (err.code === 'auth/user-not-found') {
                        document.getElementById('err-log').innerHTML = "User is not found!"
                    }

                    if (err.code === 'auth/wrong-password') {
                        document.getElementById('err-log').innerHTML = "Password is wrong!"
                    }

                    if (err.code === 'auth/network-request-failed') {
                        document.getElementById('err-log').innerHTML = "You must online to login!"
                    }
                })
        }
    })
}


function sendResetPass(e) {
    e.preventDefault()
    let mailInput = document.querySelector('#frg-email').value
    if (mailInput < 1) {
        document.querySelector('#err-frg').innerHTML = 'Email is required!'
    } else if (!mailInput.includes('@') || mailInput.split('@')[1].split('.').length < 2) {
        document.querySelector('#err-frg').innerHTML = 'Email is invalid!'
    } else {
        document.querySelector('#err-frg').innerHTML = ''
        firebase.database().ref('users').on('value', function (data) {
            let d = (Object.values(data.val())).filter(f => f.email === mailInput);
            if (d.length < 1) {
                document.querySelector('#err-frg').innerHTML = 'User is not Registered!'
            } else {
                document.querySelector('#err-frg').innerHTML = ''
                firebase.auth().sendPasswordResetEmail(d[0].email, {
                    url: `${uri}`
                })
                    .then(() => {
                        sessionStorage.setItem('success-alert', '||Reset Password Mail has been Sent!')
                        redirect('/')
                    })
                    .catch(e => {
                        if (e.code === 'auth/too-many-requests') {
                            document.querySelector('#err-frg').innerHTML = 'Too many reset password request!'
                        }
                    })
            }
        })
    }
}


function LogoutUser() {
    localStorage.clear()
    firebase.auth().signOut()
    redirect('/')
}

function UserInfoDb(uid) {
    let id = uid
    useEffect(() => {
        firebase.database().ref('users/' + id).on('value', res => {
            sessionStorage.setItem('userProfile', JSON.stringify(res.val()))
        })
    })
}

export {
    RegisterUser,
    LoginUser,
    LogoutUser,
    UserInfoDb,
    sendResetPass
}