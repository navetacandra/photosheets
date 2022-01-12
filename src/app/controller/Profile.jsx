import React from 'react';
import ProfilePage from '../views/Profile'
import { redirect } from '../config/app';
import EditAccounts from './EditAccount';
import DeleteAccounts from './DeleteAccount';

export default function Profile() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user !== null) {
        return (
            <div>
                <ProfilePage profilePict={user.profilePict} name={user.name} email={user.email} uid={user.uid}/>
                <EditAccounts />
                <DeleteAccounts />
            </div>
        )
    } else {
        redirect('/')
    }
}