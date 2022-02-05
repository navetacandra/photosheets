import React, { Fragment } from 'react'
import FeedAvatar from './FeedAvatar'
import FeedDate from './FeedDate'
import FeedDot from './FeedDot'
import Linkify from 'react-linkify';

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


function FeedItems(props) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let month = months[props.month - 1]

    return (
        <div className="card shadow mb-3">
            <div className="card-body">
                <FeedDot
                    uid={props.uid}
                    id={props.feedId}
                />
                <FeedAvatar
                    src={props.profilePict}
                    name={props.name}
                />
                <FeedDate
                    year={props.year}
                    month={month}
                    date={props.date}
                />
                {props.image ? (
                    props.message ? (
                        <div className="col-lg d-block mt-2">
                            <NewlineText text={props.message} />
                            <div className="col-lg-12 mb-1 mt-1">
                                <figure className="figure d-block mx-auto">
                                    <img src={props.image} alt={"post-image"+props.feedId} className="figure-img default-post d-block mx-auto" />
                                </figure>
                            </div>
                        </div>
                    ) : (
                        <div className="col-lg d-block">
                            <div className="col-lg-12 my-1">
                                <figure className="figure d-block mx-auto">
                                    <img src={props.image} alt={"post-image"+props.feedId} className="figure-img img-fluid default-post d-block mx-auto" alt="" />
                                </figure>
                            </div>
                        </div>
                    )
                ) : (
                    <div className="col d-block">
                        <NewlineText text={props.message} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default FeedItems
