import React from 'react'

function FeedHeader(props) {
    return (
        <div className="col-lg-8 d-flex">
            <img 
            width="50" 
            height="50" 
            src={props.src} 
            alt="" 
            className="rounded-circle mr-2 float-left shadow-sm profile-image" 
            />
            <h5 className="text-dark align-self-center">
                {props.name}
            </h5>
        </div>
    )
}

export default FeedHeader
