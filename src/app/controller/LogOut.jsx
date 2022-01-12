import { redirect } from '../config/app';
import firebase from '../config/firebase.config'

export default function LogOut() {
    localStorage.clear()
    firebase.auth().signOut()
    redirect('/')
}
