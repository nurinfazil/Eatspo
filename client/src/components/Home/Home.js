import React, { useState, useEffect } from 'react'
import Header from "../Layout/Header"
import Footer from "../Layout/FooterMenu"

import axios from "axios"

import { Link } from "react-router-dom"

import { Button } from "react-bootstrap"

import AddNew from "../../images/add-new-icon.png"

import "./Home.css"

const Home = () => {
    const usernameToSearch = { username: window.localStorage.getItem('username') }
    const [usersFriends, setUsersFriends] = useState([])
    const [postsToShow, setPostsToShow] = useState([])

    useEffect(() => {
        let postsToSet = []

        axios.post("http://localhost:5000/api/findUserByUserName", usernameToSearch)
            .then(res => {
                setUsersFriends(res.data[0].friends);

                res.data[0].friends.map(friend => {
                    let userToPass = { userID: friend }
                    axios.post("http://localhost:5000/api/findPostsGivenUserID", userToPass)
                        .then(res => {
                            console.log("geting posts: ", res.data);
                            res.data.map(post => {
                                postsToSet.push(post);
                            })
                        })
                        .catch()
                })
            })
            .catch()

        setPostsToShow(postsToSet)

        console.log("friends: ", usersFriends)

    }, [])

    // useEffect(() => {
    //     usersFriends.map(friend => {
    //         let userToPass = { userID: friend }
    //         axios.post("http://localhost:5000/api/findPostsGivenUserID", userToPass)
    //             .then(res => {
    //                 console.log("geting posts: ", res.data);
    //                 // (res.data).map(post => {
    //                 //     setPostsToShow(postsToShow => [...postsToShow, post]);
    //                 // })
    //             })
    //             .catch()
    //     })
    // }, [])

    return (
        <div className="feed">
            <Header pageTitle="feed" />
            <Footer activePage="feed" />
            <Link to="/new-post">
                <Button className="add-new-post">
                    <img src={AddNew} />
                </Button>
            </Link>
            <h1>stuff</h1>
            <h1>stuff</h1><h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>
            <h1>stuff</h1>

        </div>
    )
}

export default Home
