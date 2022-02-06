import React from 'react'
import LoggedInNav from './Component/LoggedInNav'
import ProfileAvatar from './Component/ProfileAvatar'

export default function ProfileView({ profilePict, name, email, uid }) {
    return (
        <div className="bg bg-light" style={{ width: '100vw', height: '100vh', overflowX: 'hidden' }}>
            <LoggedInNav />
            <div className="container" style={{ marginTop: '4em' }}>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card my-3 p-0">
                            <div className="card-body">
                                <ul className="list-group list-group-flush text-center">
                                    <li className="list-group-item">
                                        <ProfileAvatar src={profilePict} />
                                    </li>
                                    <li className="list-group-item">
                                        Name :
                                        <br />
                                        {name}
                                    </li>
                                    <li className="list-group-item">
                                        Email:
                                        <br />
                                        {email}
                                    </li>
                                    <li className="list-group-item">
                                        User ID:
                                        <br />
                                        {uid}
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <button className="btn btn-warning w-100"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#EditAccountModal">
                                                    Edit Profile
                                                </button>
                                            </div>
                                            <div className="col-lg-6">
                                                <button className="btn btn-danger w-100"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#DeleteAccountModal">
                                                    Delete Account
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}