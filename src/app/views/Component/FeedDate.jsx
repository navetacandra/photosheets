import React from 'react';

function FeedDate(props) {
    return (
        <div className="col-md-5 mt-1">
            <span className="text-dark font-italic">
            {props.year} {props.month} {props.date}
            </span>
        </div>
    )
}

export default FeedDate