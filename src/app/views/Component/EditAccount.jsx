import React from 'react';
import './EditAccount.css';

export default function EditAccount({ Edit, fileChange, name, nameInput }) {
    return (
        <div className="modal fade" id="EditAccountModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Edit Profile
                            </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-2 preview_container" style={{

                        }}>
                            <img src=""
                                width="200"
                                alt="200 X 200"
                                id="image_preview" />
                            <span id="image_size">200 X 200</span>
                        </div>
                        <div className="form-group">
                            <input type="file" id="fileInput" onChange={(e) => fileChange(e.target.files)} />
                        </div>
                        <div className="form-group">
                            <span className="small text-danger" id="err-file"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Profile Name:</label>
                            <input type="text" name="name" id="name"
                                className="form-control" placeholder="Name.." 
                                defaultValue={name}/>
                        </div>
                        <div className="form-group">
                            <span className="small text-danger" id="err-name"></span>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success" onClick={Edit}>Save Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}