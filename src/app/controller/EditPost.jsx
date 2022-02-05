import React, { useState, useEffect } from 'react'
import firebase from '../config/firebase.config'
import EditPostModal from '../views/Component/EditPostModal'
import { redirect } from '../config/app'
import fconfig from "../../firebase.config.json"

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
function EditPosts(props) {
    const user = props.user
    const storageName = fconfig.storageBucket
    const postDb = firebase.database().ref('Posts/' + props.id)
    const [input, setInput] = useState('')
    const [postdata, setPostdata] = useState({})
    const [img, setImg] = useState('')
    const [media, setMedia] = useState('')
    const [blob, setBlob] = useState('')
    let nameFile = Date.parse(Date()) + user.uid

    useEffect(() => {
        firebase.database().ref(`Posts/${props.id}`).once('value', function (data) {
            if (data.val()) {
                let _data = data.val()
                if (_data.image) {
                    setBlob(_data.image)
                    setMedia(decodeURIComponent(_data.image.split('?')[0].split(`${storageName}/o/`)[1]))
                }
                if (_data.message) setInput(_data.message.trim())
                setPostdata(_data)
                document.querySelector(`#text-input${props.id}`).value = _data.message
            }
        })

        if(document.querySelector(`#text-input${props.id}`).value.trim() !== input) {
            setInput(document.querySelector(`#text-input${props.id}`).value.trim())
        }

        document.querySelector(`#editPostModal${props.id}`).addEventListener('hidden.bs.modal', function () {
            document.querySelector(`#text-input${props.id}`).value = postdata.message ? postdata.message : ''
            document.querySelector('#filePost' + props.id).value = ''
            setBlob(postdata.image)
        })
    }, [])

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
            document.querySelector('#blob' + props.id).innerHTML = ""
            setBlob(blobURL)
            fetch(blobURL).then(res => {
                return res.blob();
            }).then(blob => {
                setImg(blob)
            })
        }
        else {
            document.querySelector('#blob' + props.id).innerHTML = "We doesn't support this file type!"
        }
    }

    function err(err) {
        console.log(err);
    }
    function complete() {
        firebase.storage().ref('Posts/' + nameFile).getDownloadURL()
            .then(url => {
                let capt = document.querySelector(`#text-input${props.id}`).value.trim() !== input ?  document.querySelector(`#text-input${props.id}`).value.trim() : input
                postDb.update({
                    image: url,
                    message: capt
                })
                    .then(() => {
                        if (media) {
                            firebase.storage().ref(media).delete()
                            .then(redirect('/'))
                            .catch(() => {})
                        }
                    })
            })
    }

    function postCapt() {
        let capt = document.querySelector(`#text-input${props.id}`).value.trim() !== input ?  document.querySelector(`#text-input${props.id}`).value.trim() : input
        if (img !== '') {
            document.querySelector('#errcapt' + props.id).innerHTML = ''
            if ((capt === postdata.message && blob === postdata.image) || !postdata.message && !capt && blob === postdata.image) {
                redirect('/')
            } else {
                let task = firebase.storage().ref('Posts/' + nameFile).put(img)
                task.on('state_changed', null, err, complete)
            }
        } else {
            if (capt !== '') {
                document.querySelector('#errcapt' + props.id).innerHTML = ''
                if (capt === postdata.message && blob === postdata.image) {
                    redirect('/')
                } else {
                    if (!blob && postdata.image) {
                        postDb.update({
                            message: capt,
                            image: null
                        }).then(() => {
                            if (media) {
                                firebase.storage().ref(media).delete()
                                .then(redirect('/'))
                                .catch(() => {})
                            }
                        })
                    } else {
                        postDb.update({
                            message: capt
                        }).then(() => {
                            redirect('/')
                        })
                    }
                }
            } else {
                if (blob === postdata.image) {
                    postDb.update({
                        message: capt,
                        image: blob
                    }).then(() => {
                        redirect('/')
                    })
                } else {
                    document.querySelector('#errcapt' + props.id).innerHTML = 'Caption or Image is required!'
                }
            }
        }
    }
    return (
        <EditPostModal setCaption={setC} id={props.id} postdata={postdata} post={postCapt} Blob={Blob} handleFile={handleFile} user={props.user} url={blob} deleteImage={deleteImage} />
    )
}

export default EditPosts
