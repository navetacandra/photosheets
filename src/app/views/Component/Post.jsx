import React from 'react'
import PostModal from './PostModal'

function Post({ setCaption, post, handleFile, Blob, blobURL, deleteImage }) {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5 mt-3 mb-3">
                    <div className="card shadow rounded d-block">
                        <div className="card-body">
                            <div className="col-lg-8 d-flex">
                                <img 
                                src={user.profilePict} 
                                width="50" 
                                height="50" 
                                alt=""
                                className="rounded-circle profile-image shadow-sm mr-3 float-left" 
                                style={{ marginTop: '-.4em' }} />
                                <h5 className="text-dark align-self-center">{user.name}</h5>
                            </div>
                            <div className="col mt-3 d-flex">
                                <div className="input-group">
                                    <input type="text" name="caption" id="caption" className="form-control" defaultValue={`What's on your mind, ${user.name}?`} data-toggle="modal" data-target="#postModal" readOnly />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PostModal
                    setCaption={setCaption}
                    handleFile={handleFile}
                    post={post}
                    user={user}
                    Blob={Blob}
                    blobURL={blobURL}
                    deleteImage={deleteImage}
                />
            </div>
        </div>
    )
}

export default Post
