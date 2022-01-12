import React from 'react'
import RegisterForm from '../views/Register'
import { RegisterUser } from '../model/Model'


const Register = () => {
    const register = e => {
        e.preventDefault()
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const pass = document.getElementById('reg-password').value;
        const repPass = document.getElementById('reg-password1').value;
        if (name !== "") {
            document.querySelector('#err-reg').innerHTML = ""
            if (email !== "") {
                document.querySelector('#err-reg').innerHTML = ""
                if (pass !== "") {
                    document.querySelector('#err-reg').innerHTML = ""
                    if (repPass !== "") {
                        document.querySelector('#err-reg').innerHTML = ""
                        if (pass === repPass) {
                            document.querySelector('#err-reg').innerHTML = ""
                            RegisterUser(email, pass, name)
                        } else {
                            document.querySelector('#err-reg').innerHTML = "Password doesn't match!"
                        }
                    } else {
                        document.querySelector('#err-reg').innerHTML = 'Repeat password is required!'
                    }
                } else {
                    document.querySelector('#err-reg').innerHTML = 'Password is required!'
                }
            } else {
                document.querySelector('#err-reg').innerHTML = 'Email is required!'
            }
        } else {
            document.querySelector('#err-reg').innerHTML = 'Name is required!'
        }
    }
    return (
        <RegisterForm onClick={register} />
    )
}

export default Register