import React from 'react'

function PostModal({ setCaption, handleFile, post, user }) {
    return (
        <div className="modal fade" id="postModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="text-center">
                            <h5>Create Posts</h5>
                        </div>
                        <hr />
                        <div className="col-lg-8 d-flex">
                            <img
                                src={user.profilePict}
                                width="50"
                                height="50"
                                alt=""
                                className="rounded-circle shadow-sm mr-3 float-left profile-image" style={{ marginTop: '-.4em' }} />
                            <h5 className="text-dark align-self-center">{user.name}</h5>
                        </div>
                        <div className="col mt-1 d-block" id="blob-image-container">
                        </div>
                        <div className="input-group mt-2 pl-3">
                            <small className="text-danger mb-0" id="errcapt"></small>
                            <small className="text-danger mb-0" id="blob"></small>
                        </div>
                        <div className="col mt-1 d-flex">
                            <div className="input-group">
                                <textarea className="form-control" placeholder={`What's on your mind, ${user.name}?`}
                                    onChange={e => setCaption(e.target.value)} style={{
                                        height: '10em'
                                    }} />
                            </div>
                        </div>
                        <div className="col mt-2">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <input accept='image/*' type="file" name="filePost" id="filePost"
                                        style={{
                                            width: '.1px',
                                            height: '.1px',
                                            overflow: 'hidden',
                                            opacity: '0',
                                            position: 'absolute',
                                            zIndex: '-1px',
                                            marginTop: '.5em',
                                            marginLeft: '.5em'
                                        }}
                                        onChange={e => handleFile(e.target.files)}
                                    />
                                    <label htmlFor="filePost" style={{
                                        fontSize: '1em',
                                        fontWeight: '700',
                                        color: 'black',
                                        display: 'inline-block',
                                    }}>
                                        <svg style={{cursor: 'pointer'}} width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-card-image" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9c0 .013 0 .027.002.04V12l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15 9.499V3.5a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm4.502 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                        </svg>
                                        <span style={{
                                            marginTop: '.5em',
                                            marginLeft: '.5em',
                                            cursor: 'pointer'
                                        }}>
                                            Image
                                            </span>
                                    </label>
                                </li>
                                <li className="list-group-item"></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mx-auto mb-3 col-md-10">
                            <div className="input-group-lg">
                                <div className="container">
                                    <button type="button" id="post-btn" className="btn w-100 btn-primary" onClick={post}>
                                        <span className="font-weight-bold">
                                            Post
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostModal