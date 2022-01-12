import React, { useState } from 'react'
import firebase from '../config/firebase.config'
import Post from '../views/Component/Post'
import { redirect } from '../config/app'

function Posts() {
    const user = JSON.parse(localStorage.getItem('user'))
    const postDb = firebase.database().ref('Posts')
    const [input, setInput] = useState('')
    const [img, setImg] = useState('')
    let nameFile = Date.parse(Date()) + user.uid
    const supportImageType = [
        'image/jpg',
        'image/jpeg',
        'image/jp2',
        'image/j2k',
        'image/jpf',
        'image/jpx',
        'image/jpm',
        'image/m2j',
        'image/png',
        'image/gif',
        'image/tiff',
        'image/psd',
        'image/pdf',
        'image/eps',
        'image/ai',
        'image/indd',
        'image/raw',
        'image/heif',
        'image/webp',
        'image/svg',
        'image/svgz',
    ]

    function setC(val) {
        setInput(val)
    }
    function handleFile(selectorFile) {

        let file = selectorFile[0]
        let blobURL = URL.createObjectURL(file)

        if (supportImageType.includes(file.type)) {
            document.querySelector('#blob').innerHTML = ""
            document.querySelector('#blob-image-container').innerHTML = `
            <img src="${blobURL}" class="figure-img img-fluid"></img>
            `;
            fetch(blobURL).then(res => {
                return res.blob();
            }).then(blob => {
                setImg(blob)
            })
        }
        else {
            document.querySelector('#blob').innerHTML = "We doesn't support this file type!"
        }
    }

    function err(err) {
        console.log(err);
    }
    function complete() {
        firebase.storage().ref('Posts/' + nameFile).getDownloadURL()
            .then(url => {
                let capt = input
                postDb.push({
                    image: url,
                    message: capt,
                    name: user.name,
                    timestamp: firebase.database.ServerValue.TIMESTAMP,
                    profilePict: user.profilePict,
                    uid: user.uid
                })
                    .then(() => {
                        redirect('/')
                    })
            })
    }

    function postCapt() {
        if (img !== '') {
            document.querySelector('#errcapt').innerHTML = ''
            let task = firebase.storage().ref('Posts/' + nameFile).put(img)
            task.on('state_changed', null, err, complete)
        } else {
            if (input !== '') {
                document.querySelector('#errcapt').innerHTML = ''
                postDb.push({
                    message: input,
                    name: user.name,
                    timestamp: firebase.database.ServerValue.TIMESTAMP,
                    profilePict: user.profilePict,
                    uid: user.uid
                }).then(() => {
                    redirect('/')
                })
            } else {
                document.querySelector('#errcapt').innerHTML = 'Caption is required!'
            }
        }
    }
    return (
        <Post setCaption={setC} post={postCapt} handleFile={handleFile} />
    )
}

export default Posts
