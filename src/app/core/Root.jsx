import React from 'react'
import Login from '../controller/Login'
import Beranda from '../controller/Beranda'

export default function Root(props) {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user !== null) {
        return (
            <>
                <Beranda />
            </>
        )
    } else {
        return (
            <Login />
        )
    }
}