import React from 'react'
import FeedAvatar from './FeedAvatar'
import FeedDate from './FeedDate'


function FeedItems(props) {
    return (
        <div className="card shadow mb-3">
            <div className="card-body">
                <FeedAvatar
                    src={props.profilePict}
                    name={props.name}
                />
                <FeedDate
                    year={props.year}
                    month={props.month}
                    date={props.date}
                />
                {props.image ? (
                    props.message ? (
                        <div className="col-lg d-block mt-2">
                            <span className="text-dark">{props.message}</span>
                            <div className="col-lg-12 mb-1 mt-1">
                                <figure className="figure">
                                    <img src={props.image} alt="" className="figure-img default-post" />
                                </figure>
                            </div>
                        </div>
                    ) : (
                            <div className="col-lg d-block">
                                <div className="col-lg-12 my-1">
                                    <figure class="figure">
                                        <img src={props.image} class="figure-img img-fluid default-post" alt="" />
                                    </figure>
                                </div>
                            </div>
                        )
                ) : (
                        <div className="col d-block">
                            <span className="text-dark">{props.message}</span>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default FeedItems
