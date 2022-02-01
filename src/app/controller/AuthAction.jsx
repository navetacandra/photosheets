import React from 'react';
import { useParams } from "react-router-dom";
import { redirect } from '../config/app';
import firebase from '../config/firebase.config';

function VerifyEmail(path) {
    firebase.database().ref('users/' + path.uid).once('value', function (data) {
        let val = data.val();
        if (val) {
            if (path.token === val.token || !val.token) {
                firebase.database().ref('users/' + val.uid).update({
                    isVerify: true,
                    token: {}
                }).then(e => redirect('/'))
            }
        }
    })
}

export default function AuthAction() {
    let path = useParams()
    let mode = path.mode;
    React.useEffect(() => {
        if (mode === 'verify') {
            VerifyEmail(path)
        }
    }, [])
    return (
        <div>
        </div>
    )
}
