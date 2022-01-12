import React from "react";
import FirebaseIcon from '../../../firebase-icon.svg'
import ReactIcon from '../../../reactjs-icon.svg'
import InstagramIcon from '../../../instagram-icon.svg'
import GmailIcon from '../../../gmail-icon.svg'
import GithubIcon from '../../../github-icon.svg'
import WebIcon from '../../../web-icon.svg'

export default function Footer(props) {
    let mt = {
        marginTop: props.mt
    }
    return (
        <div className="footer-dark shadow-md" style={mt}>
            <footer>
                <div className="container">
                    <div className="row" id="footer">
                        <div className="col-md item float-left container">
                            <h3>Technology</h3>
                            <div className="row">
                                <ul className='list-group col-md'>
                                    <li className='list-group-item'><a href="https://firebase.google.com/docs/hosting/"><img height='40' src={FirebaseIcon} alt="Firebase Icon" /> Firebase Hosting</a></li>
                                    <li className='list-group-item'><a href="https://firebase.google.com/docs/auth/web/start/"><img height='40' src={FirebaseIcon} alt="Firebase Icon" /> Firebase Authentication</a></li>
                                    <li className='list-group-item'><a href="https://firebase.google.com/docs/database/web/start/"><img height='40' src={FirebaseIcon} alt="Firebase Icon" /> Firebase Realtime Database</a></li>
                                </ul>
                                <ul className="list-group col-md">
                                    <li className='list-group-item'><a href="https://firebase.google.com/docs/storage/web/start/"><img height='40' src={FirebaseIcon} alt="Firebase Icon" /> Firebase Storage</a></li>
                                    <li className='list-group-item'><a href="https://id.reactjs.org/docs/getting-started.html"><img height='40' src={ReactIcon} alt="React Icon" /> React DOM</a></li>
                                    <li className='list-group-item'><a href="https://reactrouter.com/docs/en/v6/getting-started/overview"><img height='40' src={ReactIcon} alt="React Icon" /> React Router</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md item float-right container" id='social'>
                            <h3>Social</h3>
                            <div className="row">
                                <ul className='list-group col-md'>
                                    <li className='list-group-item'><a href="https://instagram.com/naveta_candra/"><img height='40' src={InstagramIcon} alt="Instagram Icon" /> @naveta_candra</a></li>
                                    <li className='list-group-item'><a href="mailto:naveta.cand@gmail.com"><img height='40' src={GmailIcon} alt="Gmail Icon" /> naveta.cand@gmail.com</a></li>
                                </ul>
                                <ul className='list-group col-md'>
                                    <li className='list-group-item'><a href="https://github.com/navetacandra/"><img height='40' src={GithubIcon} alt="Github Icon" /> @navetacandra</a></li>
                                    <li className='list-group-item'><a href="https://navetacandra.eu.org/"><img height='40' src={WebIcon} alt="Web Icon" /> navetacandra.eu.org</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="copyright">PhotoSheets.web.app © {new Date().getFullYear()}</p>
                </div>
            </footer>
        </div>
    )
}