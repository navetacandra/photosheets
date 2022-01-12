import React from 'react'
import firebase from '../config/firebase.config'
import { redirect } from '../config/app'
import DeleteAccount from '../views/Component/DeleteAccount'

function DeleteAccounts() {
    const user = JSON.parse(localStorage.getItem('user'))
    const errPass = document.getElementById('err-del-pass')
    const [pass, setPass] = React.useState('')
    let arr = []
    function setP(val) {
        setPass(val)
    }

    function updatePostsRef() {
        firebase.database().ref('Posts/').once('value', function (data) {
            data.forEach(snap => {
                arr.push({ id: snap.key, data: snap.val() })
            })
        })
            .then(() => {
                firebase.database().ref('Posts').set({})
                if (arr) {
                    let mapper = []
                    arr.map(res => {
                        if (res.data.uid === user.uid) {
                            res.data.image = null
                            res.data.message = null
                            res.data.name = null
                            res.data.profilePict = null
                            res.data.timestamp = null
                            res.data.uid = null
                        }
                        return mapper.push(res)
                    })
                    mapper.map(e => {
                        let data = []
                        data.push(e)
                        return data.forEach(res => {
                            let key = res.id
                            firebase.database().ref('Posts/' + key).update(res.data)
                        })
                    })
                }
            })
        }
        
        function deleteAcc() {
            firebase.auth().signInWithEmailAndPassword(user.email, pass)
            .then(() => {
                updatePostsRef()
                firebase.auth().currentUser.delete()
                firebase.database().ref('users/' + user.uid).remove()
                localStorage.clear()
                redirect('/')
            })
            .catch(err => {
                function inputBlank() {
                    document.getElementById('del-pass').value = ''
                }
                if (err.code === 'auth/too-many-requests') {
                    errPass.innerHTML = 'Too many unsuccesful request!'
                    inputBlank()
                }
                if (err.code === 'auth/wrong-password') {
                    errPass.innerHTML = 'Password is wrong!'
                    inputBlank()
                }
                console.log(err);
            })
    }
    return (
        <DeleteAccount Delete={deleteAcc} setPass={setP} />
    )
}

export default DeleteAccounts
