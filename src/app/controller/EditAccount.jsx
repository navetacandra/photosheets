import React from 'react'
import firebase from '../config/firebase.config'
import EditAccount from '../views/Component/EditAccount'
import { redirect } from '../config/app'

function EditAccounts() {
    let supportPict = [
        'image/jpg',
        'image/jpeg',
        'image/jp2',
        'image/j2k',
        'image/jpf',
        'image/jpx',
        'image/jpm',
        'image/m2j',
        'image/png',
        'image/svg',
    ]
    const user = JSON.parse(localStorage.getItem('user'))
    let file = null;
    let arr = []
    let name = user.uid


    function update(name, profilePict) {
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
                            res.data.name = name
                            res.data.profilePict = profilePict
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
                redirect('/profile')
            })
    }

    function handleChange(selectorFile) {
        file = selectorFile[0]
        console.log(file.type);
    }

    function load() { }
    function err(err) {
        console.log(err);
    }
    function complete() {
        const img = firebase.storage().ref('profilePict/' + name)
        img.getDownloadURL()
            .then(url => {
                firebase.database().ref('users/' + user.uid)
                    .update({
                        name: document.getElementById('name').value,
                        profilePict: url
                    })
                    .then(() => {
                        update(document.getElementById('name').value, url)
                    })
            })
    }

    const saveEdit = () => {
        if (file !== null) {
            if (document.getElementById('name').value !== '') {
                document.getElementById('err-name').innerHTML = ''
                if (supportPict.includes(file.type)) {
                    document.getElementById('err-file').innerHTML = ''
                    if (file.size <= 2048000) {
                        let storageRef = firebase.storage().ref('profilePict/' + name)
                        let uploadTask = storageRef.put(file)
                        uploadTask.on('state_changed', load, err, complete)
                        document.getElementById('err-file').innerHTML = ''
                    } else {
                        document.getElementById('err-file').innerHTML = 'File size is too large!'
                    }
                }
                else {
                    document.getElementById('err-file').innerHTML = 'Profile picture only supports JPEG and PNG types!'
                }
            } else {
                document.getElementById('err-name').innerHTML = 'Name is required!'
            }
        } else {
            if (document.getElementById('name').value !== '') {
                firebase.database().ref('users/' + user.uid)
                    .update({
                        name: document.getElementById('name').value,
                        profilePict: user.profilePict
                    })
                    .then(() => {
                        update(document.getElementById('name').value, user.profilePict)
                    })
            } else {
                document.getElementById('err-name').innerHTML = 'Name is required!'
            }
        }
    }
    return (
        <EditAccount name={user.name} Edit={saveEdit} fileChange={handleChange} />
    )
}

export default EditAccounts
