import React, { useEffect, useState } from 'react';
import DeletePostModal from '../views/Component/DeletePostModal';
import firebase from "../config/firebase.config"
import { redirect } from "../config/app"
import fconfig from "../../firebase.config.json"

export default function DeletePost({ id }) {
    const [postdata, setPostdata] = useState({});
    const [media, setMedia] = useState('');
    useEffect(() => {
        firebase.database().ref(`Posts/${id}`).once('value', function (data) {
            if (data.val()) {
                let _data = data.val()
                setPostdata(data.val())
                if (_data.image) {
                    setMedia(decodeURIComponent(_data.image.split('?')[0].split(`${fconfig.storageBucket}/o/`)[1]))
                    console.log(decodeURIComponent(_data.image.split('?')[0].split(`${fconfig.storageBucket}/o/`)[1]))
                }
            }
        })
    }, []);

    function Delete() {
        firebase.database().ref(`Posts/${id}`).remove()
            .then(() => {
                if (media) {
                    firebase.storage().ref(media).delete()
                        .then(redirect('/'))
                        .catch(redirect('/'))
                }
            }).catch(alert('Error when delete post!'))
    }
    return (
        <DeletePostModal id={id} postdata={postdata} Delete={Delete} />
    );
}
