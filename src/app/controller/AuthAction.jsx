import React from 'react';
import { useParams } from "react-router-dom";
import { redirect } from '../config/app';
import firebase from '../config/firebase.config';

function VerifyEmail(path) {
    let v = path.path
    firebase.database().ref('users/' + v.uid).once('value', function (data) {
        let val = data.val();
        if (val) {
            if (v.token === val.token || !val.token) {
                firebase.database().ref('users/' + val.uid).update({
                    isVerify: true,
                    token: {}
                }).then(e => redirect('/'))
            }
        }
    })
    return (
        <>
        </>
    )
}

export default function AuthAction() {
    let path = useParams()
    let mode = path.mode;

    return (
        <>
            {
                mode === 'verify' ? <VerifyEmail path={path} /> : null
            }
        </>
    )
}
