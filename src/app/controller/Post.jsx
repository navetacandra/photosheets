import React, { useEffect, useState } from 'react'
import firebase from '../config/firebase.config'
import Post from '../views/Component/Post'
import { redirect } from '../config/app'

function Blob({ url }) {
    return (
        <>
            {
                url ? (
                    <>
                        <img src={url} alt={"image-from"+url} className="figure-img img-fluid d-block mx-auto"></img>
                    </>
                ) : (
                    <>
                    </>
                )
            }
        </>
    )
}

function Posts() {
    const user = JSON.parse(localStorage.getItem('user')) || firebase.auth().currentUser
    const postDb = firebase.database().ref('Posts')
    const [input, setInput] = useState('')
    const [img, setImg] = useState('')
    const [blob, setBlob] = useState('')
    let nameFile = Date.parse(Date()) + user.uid;

    useEffect(() => {
        if(document.querySelector(`#text-input-post`).value.trim() !== input) {
            setInput(document.querySelector(`#text-input-post`).value.trim())
        }

        document.querySelector(`#postModal`).addEventListener('hidden.bs.modal', function () {
            document.querySelector(`#text-input-post`).value = ''
            document.querySelector('#filePost').value = ''
            setBlob('')
        })
    }, []);

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

    function deleteImage() {
        setBlob('')
        setImg('')
    }

    function handleFile(selectorFile) {

        let file = selectorFile[0]
        let blobURL = URL.createObjectURL(file)

        if (supportImageType.includes(file.type)) {
            document.querySelector('#blob').innerHTML = ""
            setBlob(blobURL)
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
                let capt = document.querySelector(`#text-input-post`).value.trim() !== input ?  document.querySelector(`#text-input-post`).value.trim() : input
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
        let capt = document.querySelector(`#text-input-post`).value.trim() !== input ?  document.querySelector(`#text-input-post`).value.trim() : input
        console.log(capt !== '')
        if (img !== '') {
            document.querySelector('#errcapt').innerHTML = ''
            let task = firebase.storage().ref('Posts/' + nameFile).put(img)
            task.on('state_changed', null, err, complete)
        } else {
            if (capt !== '') {
                document.querySelector('#errcapt').innerHTML = ''
                postDb.push({
                    message: capt,
                    name: user.name,
                    timestamp: firebase.database.ServerValue.TIMESTAMP,
                    profilePict: user.profilePict,
                    uid: user.uid
                }).then(() => {
                    // redirect('/')
                    console.log(capt)
                })
            } else {
                document.querySelector('#errcapt').innerHTML = 'Caption or Image is required!'
            }
        }
    }
    return (
        <Post setCaption={setC} post={postCapt} deleteImage={deleteImage} Blob={Blob} blobURL={blob} handleFile={handleFile} />
    )
}

export default Posts
