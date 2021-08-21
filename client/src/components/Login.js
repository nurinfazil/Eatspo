import { React, useState, useEffect } from 'react'
import axios from "axios"

import Logo from "../images/eatspo.png"

import { Button } from "react-bootstrap"

import "./Login.css"

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const handleUsernameChange = (event) => setUsername(event.target.value)
    const handlePasswordChange = (event) => setPassword(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault();

        const userToLogin = {
            username: username,
            password: password
        }

        if ((userToLogin.username.length > 0) && (userToLogin.password.length > 0)) {
            axios.post('http://localhost:5000/api/findUserByUserName', userToLogin)
                .then(res => {
                    let correctPass = res.data[0].password

                    if (correctPass == password) {
                        window.location.replace("/feed");
                        return
                    } else {
                        setSuccessMessage("Password incorrect. Please try again")
                    }
                })
                .catch(err => console.log(err))
        } else {
            console.log('Not filled out')
        }
    }

    return (
        <div className="login-screen">
            <div>
                <img className="logo" src={Logo}></img>
            </div>
            <div>
                <h1 className="login-title">Welcome! Login to find your next meal.</h1>
            </div>

            <div>
                <form className="login-form" onSubmit={handleSubmit}>

                    <div class="form-floating">
                        <input
                            required
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            onChange={handleUsernameChange}
                            value={username}
                            placeholder="Email"
                        />
                        <label for="floatingInput">Email</label>
                    </div>

                    <div class="form-floating">
                        <input
                            required
                            type="password"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Password"
                            onChange={handlePasswordChange}
                            value={password}
                        />
                        <label for="floatingInput">Password</label>
                    </div>
                    <div className="login-btn">
                        <Button
                            type="submit"
                            variant="dark">
                            Login
                        </Button>
                    </div>
                </form>
            </div>

            <div>
                <h4 className="success-mssg">
                    {successMessage}
                </h4>
            </div>
        </div>
    )
}

export default Login
