import React from 'react';
import './EditAccount.css';

export default function EditAccount({ Delete, setPass }) {
    return (
        <div className="modal fade" id="DeleteAccountModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Delete Account
                            </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="name">Password:</label>
                            <input autoComplete='off' type="password" name="del-pass" id="del-pass"
                                className="form-control" onChange={e => setPass(e.target.value)} placeholder="Password.."/>
                        </div>
                        <div className="form-group">
                            <span className="small text-danger" id="err-del-pass"></span>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger" onClick={Delete}>Delete Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
