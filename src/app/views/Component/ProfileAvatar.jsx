import React from 'react'

function ProfileAvatar(props) {
    return (
        <div className="row justify-content-center mb-3">
            <img
                className="rounded-circle border border-light shadow profile-image"
                width="200"
                height="200"
                src={props.src}
                alt=""
            />
        </div>
    )
}

export default ProfileAvatar
