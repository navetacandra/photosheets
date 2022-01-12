// import modules
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoMatch from '../views/notfound';
import Root from './Root';
import Profile from '../controller/Profile';
import firebase from '../config/firebase.config';
import AuthAction from '../controller/AuthAction';


// App
function App() {
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user !== null) {
      let authData = firebase.auth().currentUser
      if (!authData) {
        localStorage.clear()
      }
      firebase.database().ref('users/' + user.uid).on('value', res => {
        const data = res.val();
        // Set User Info
        if (data !== null && data.isVerify) {
          let userData = { email: data.email, name: data.name, profilePict: data.profilePict, uid: data.uid, active: data.isVerify }
          localStorage.setItem('user', JSON.stringify(userData))
        } else {
          localStorage.clear()
        }
      })
    } else {
      localStorage.clear()
    }
  }, [])
  return (
    <div id="app">
      <div id="wrap">
        <main className="flex-shrink-0">
          <Router>
            <Routers />
          </Router>
        </main>
      </div>
    </div>
  );
}

// Routers
const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Root />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/auth/:mode/:uid/:token" element={<AuthAction />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default App;