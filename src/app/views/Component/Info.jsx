import React from "react";
import Footer from "./Footer";

export default function Info() {
    return (
        <>
            <div className="container mt-5 pt-5 mb-5 pb-5">
                <div className="row justify-content-start">
                    <div className="col-8">
                        <h1 className="blog-title d-flex justify-content-start">What is PhotoSheets?</h1>
                        <div className="row d-flex justify-content-start">
                            <div className="col-md-6">
                                <span className="text-dark blog-content">PhotoSheets is a Social Media prototype website made in Indonesia with the Bootstrap framework and the ReactJS javascript library and implements a Progressive Web Application system and runs database, authentication, and storage systems using Firebase.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 pt-5 mb-5 pb-5">
                <div className="row justify-content-end">
                    <div className="col-md-8">
                        <h1 className="blog-title d-flex justify-content-end">Register First!</h1>
                        <div className="row d-flex justify-content-end">
                            <div className="col-md-8">
                                <span className="text-dark blog-content">By registering you can enter and become an PhotoSheets user. This is Unforgettable Experience!.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 pt-5 mb-5 pb-5">
                <div className="row justify-content-start">
                    <div className="col-md-8">
                        <h1 className="blog-title d-flex col-6 justify-content-start">Congratulation!!</h1>
                        <div className="row d-flex justify-content-start">
                            <div className="col-md-6">
                                <span className="text-dark blog-content">Once you have registered your account and logged into PhotoSheets, congratulations!! now you can upload your status on PhotoSheets.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer mt='10vh' />
        </>
    )
}