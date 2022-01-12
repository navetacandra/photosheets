import React from 'react';
import { sendResetPass } from '../model/Model'

export default function LoginForms({ handleSubmit }) {
    let a = sessionStorage.getItem('success-alert') ? sessionStorage.getItem('success-alert').split('||') : null;
    function dismiss() {
        sessionStorage.removeItem('success-alert')
    }
    return (
        <div className="bg-light">
            <nav className="navbar navbar-dark bg-primary">
                <div className="container mx-2">
                    <a className="navbar-brand" href='/'>
                        <span className='font-weight-bold'>Photo Sheets</span>
                    </a>
                </div>
            </nav>
            <div>
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-6 my-3 p-3">
                            <div className="card border-dark mb-3 my-5">
                                <div className="shadow-lg card-body text-dark">
                                    <form>
                                        {
                                            sessionStorage.getItem('success-alert') ? (
                                                <div className="alert alert-dismissible fade show alert-success" style={{ display: 'block' }} role="alert">
                                                    <span className='font-weight-bold'>{a[0]}</span>{a[1]}
                                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={dismiss}>
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                            ) : (
                                                null
                                            )
                                        }
                                        <div className="input-group input-group-lg mb-3">
                                            <label htmlFor="log-email"></label>
                                            <input type="email" id='log-email' className="form-control" placeholder="Email.." />
                                            <br />
                                        </div>
                                        <div className="input-group input-group-lg mb-3 mt-3">
                                            <input type="password" id='log-password' className="form-control" placeholder="Password.." />
                                        </div>
                                        <div className="input-group mb-3 pl-3 row">
                                            <span id="err-log" className="text-danger mx-auto"></span>
                                        </div>
                                        <div className="input-group input-group-lg mb-3">
                                            <button onClick={handleSubmit} type="submit" id="log-button" className="mx-auto btn form-control btn-primary btn-lg" style={{ width: '' }}>
                                                <span className="font-weight-bold">LOGIN</span>
                                            </button>
                                        </div>
                                        <div className="input-group input-group-lg mb-3">
                                            <span className="mx-auto font-weight-bolder text-primary" style={{ cursor: 'pointer' }} data-toggle="modal" data-target="#frg-pass" href='/' >Forgot Password?</span>
                                        </div>
                                        <div className="modal fade" id="frg-pass" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-body">
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                        <form className='row' id='fr-passForm'>
                                                            <div className="mx-auto input-group input-group-lg col-12 mb-3">
                                                                <label htmlFor="reg-email"></label>
                                                                <input type="email" id="frg-email" className="form-control"
                                                                    placeholder="Email.." />
                                                            </div>
                                                            <div className="input-group mb-3 row pl-3">
                                                                <span id="err-frg" className="text-danger mx-auto pl-3"></span>
                                                            </div>
                                                            <hr />
                                                            <div className="input-group input-group-lg">
                                                                <button onClick={sendResetPass} type="submit" className="btn-success mx-auto btn" style={{ width: '40%', height: '100%' }}>
                                                                    <span className="font-weight-bold">
                                                                        Send Request
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <hr />
                                    <div className="input-group input-group-lg mb-3">
                                        <button className="btn mx-auto btn-lg btn-success" data-toggle="modal" data-target="#RegisterForms">
                                            <span className="font-weight-bold">
                                                Create an Account!
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}