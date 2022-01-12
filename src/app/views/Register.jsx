import React from 'react';

export default function RegisterForm({ onClick }) {
    return (
        <div className="modal fade" id="RegisterForms" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="text-center">
                            <h1 className="text-gray-900 h4 mb-4">
                                Register
                            </h1>
                        </div>
                        <form className='row' id='registerForm'>
                            <div className="alert alert-danger col-12" id="reg-err-alert" style={{ display: 'none' }} role="alert">
                                <span id="reg-err-text">

                                </span>
                            </div>
                            {/* Register Name Field */}
                            <div className="mx-auto input-group input-group-lg col-12 mb-3">
                                <label htmlFor="reg-name"></label>
                                <input type="text" id="reg-name" className="form-control"
                                    placeholder="Full Name" />
                            </div>

                            {/* Register Email Field */}
                            <div className="mx-auto input-group input-group-lg col-12 mb-3">
                                <label htmlFor="reg-email"></label>
                                <input type="email" id="reg-email" className="form-control"
                                    placeholder="Email.." />
                            </div>


                            <div className="form-group mx-auto row">
                                <div className="col-6 input-group input-group-lg mb-sm-0">
                                    <label htmlFor="reg-password"></label>
                                    <input type="password" className="form-control" autoComplete="new-password" id="reg-password"
                                        placeholder="Password" />
                                </div>

                                <div className="col-6 input-group input-group-lg mb-sm-0">
                                    <label htmlFor="reg-password1"></label>
                                    <input type="password" className="form-control" autoComplete="new-password" id="reg-password1"
                                        placeholder="Repeat Password" />
                                </div>
                            </div>
                            {/* Error Register */}
                            <div className="input-group mb-3 row pl-3">
                                <span id="err-reg" className="text-danger mx-auto pl-3"></span>
                            </div>
                            <hr />
                            <div className="input-group input-group-lg">
                                <button onClick={onClick} type="submit" className="btn-success mx-auto btn" style={{ width: '40%', height: '100%' }}>
                                    <span className="font-weight-bold">
                                        Register
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}