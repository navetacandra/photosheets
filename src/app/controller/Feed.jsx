import React from 'react'
import firebase from '../config/firebase.config'
import FeedItems from '../views/Component/FeedItems'

function Feed() {
    const [feeds, setFeeds] = React.useState([])
    React.useEffect(() => {
        firebase.database().ref('Posts/').once('value', function (data) {
            let arr = []
            if (data.val() !== null) {
                data.forEach(snap => {
                    arr.push({ id: snap.key, data: snap.val() })
                })
                let desc = arr.sort((a, b) => {
                    return b.data.timestamp - a.data.timestamp
                })
                setFeeds(desc)
            }
        })
    })
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div>
                        {feeds.map(feed => (
                            <FeedItems
                                key={feed.id}
                                profilePict={feed.data.profilePict}
                                name={feed.data.name}
                                uid={feed.data.uid}
                                year={(new Date(feed.data.timestamp).getUTCFullYear())}
                                month={(new Date(feed.data.timestamp).getUTCMonth() + 1)}
                                date={(new Date(feed.data.timestamp).getUTCDate())}
                                image={feed.data.image}
                                message={feed.data.message}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed
