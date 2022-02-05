import React, { useEffect, useState } from 'react'
import EditPosts from '../../controller/EditPost'
import firebase from "../../config/firebase.config"
import DeletePost from '../../controller/DeletePost'

function FeedDot(props) {
    const [isCreator, setCreator] = useState(false)
    const feed_id = props.id
    const user = JSON.parse(localStorage.getItem('user')) || firebase.auth().currentUser
    useEffect(() => {
        user.uid === props.uid ? setCreator(true) : setCreator(false)
    }, [])
    return (
        <>
            {
                isCreator ? (
                    <>
                        <EditPosts user={user} id={feed_id} />
                        <DeletePost id={feed_id} />
                    </>
                ) : (
                    <>
                        <EditPosts user={user} id={feed_id} />
                    </>
                )
            }
            <div className="col-lg-4 feed-info">
                <div className="dot3-feed">
                    <div className="dropdown">
                        <svg type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {
                                isCreator ? (
                                    <>
                                        <span className="dropdown-item" data-target={"#editPostModal" + props.id} data-toggle="modal">Edit</span>
                                        <span className="dropdown-item text-danger" data-target={"#deletePostModal" + props.id} data-toggle="modal">Delete</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="dropdown-item">Not Interested</span>
                                        <span className="dropdown-item text-danger">Report</span>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeedDot
