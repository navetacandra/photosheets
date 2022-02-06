import React from 'react'

function ProfileAvatar(props) {
    return (
        <div className="d-flex justify-content-center">
            <img
                className="rounded-circle shadow-sm profile-image"
                width="200"
                height="200"
                src={props.src}
                alt=""
            />
        </div>
    )
}

export default ProfileAvatar
