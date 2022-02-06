import React, { Fragment } from 'react';
import Linkify from 'react-linkify';
import FeedAvatar from './FeedAvatar';
import FeedDate from './FeedDate';

function NewlineText(props) {
    return (
        <span className="text-dark">
            {
                (props.text || "").split('\n').map((str, i) => (
                    <Fragment key={i}>
                        <Linkify>{str}</Linkify><br />
                    </Fragment>
                ))
            }
        </span>
    );
}

export default function DeletePostModal({ Delete, id, postdata = {} }) {
    let year = (new Date(postdata.timestamp).getUTCFullYear())
    let date = (new Date(postdata.timestamp).getUTCDate())
    let _month = (new Date(postdata.timestamp).getUTCMonth() + 1)
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let month = months[_month - 1]
    return (
        <div className="modal fade" id={"deletePostModal" + id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Are You Sure Want Delete This Post?
                        </h5>
                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="modal-body">

                        <div className="card shadow mb-3">
                            <div className="card-body">
                                <FeedAvatar
                                    src={postdata.profilePict}
                                    name={postdata.name}
                                />
                                <FeedDate
                                    year={year}
                                    month={month}
                                    date={date}
                                />
                                {
                                    postdata ? (
                                        <>
                                            {
                                                postdata.image ? (
                                                    postdata.message ? (
                                                        <div className="col-lg d-block mt-2">
                                                            <div className="col-lg-12 mb-1 mt-1">
                                                                <NewlineText text={postdata.message} />
                                                                <figure className="figure d-block mx-auto">
                                                                    <img src={postdata.image} alt={"delete-preview" + id} className="figure-img default-post d-block mx-auto" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="col-lg d-block mt-2">
                                                            <div className="col-lg-12 mb-1 mt-1">
                                                                <figure className="figure d-block mx-auto">
                                                                    <img src={postdata.image} alt={"delete-preview" + id} className="figure-img default-post d-block mx-auto" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    )
                                                ) : (
                                                    <div className="col-lg d-block mt-2">
                                                        <div className="col-lg-12 mb-1 mt-1">
                                                            <NewlineText text={postdata.message} />
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </>
                                    ) : null
                                }
                            </div>
                        </div>

                        <div className="row">
                            <div className="mx-auto mb-3 col-md-10">
                                <div className="input-group-lg">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3 mt-1">
                                                <button type="button" id="post-btn" className="btn w-100 btn-secondary" data-dismiss="modal" aria-label="Close">
                                                    <span className="font-weight-bold">
                                                        Cancel
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3 mt-1">
                                                <button type="button" id="post-btn" className="btn w-100 btn-danger" onClick={Delete}>
                                                    <span className="font-weight-bold">
                                                        Delete
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
