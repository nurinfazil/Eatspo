import React, { useState, useEffect } from 'react'
import Header from "../Layout/Header"
import Footer from "../Layout/FooterMenu"

import axios from "axios"

import { Link } from "react-router-dom"

import { Container, Row, Col, Button } from "react-bootstrap"

import AddNew from "../../images/add-new-icon.png"

import "./Home.css"

const Home = () => {
    const usernameToSearch = { username: window.localStorage.getItem('username') }
    const [usersFriends, setUsersFriends] = useState([])
    const [postsToShow, setPostsToShow] = useState([])
    let postsToSet = []

    // function getName(findID) {
    //     let userToPass = { userID: findID }
    //     let firstName = ""
    //     let lastName = ""
    //     axios.post("http://localhost:5000/api/findUserByUserID", userToPass)
    //         .then(res => {
    //             console.log(res.data)
    //             firstName = res.data[0].firstname
    //             lastName = res.data[0].lastname
    //             return (firstName + " " + lastName)
    //         })
    //         .catch();

    // }

    useEffect(() => {

        axios.post("http://localhost:5000/api/findUserByUserName", usernameToSearch)
            .then(res => {
                setUsersFriends(res.data[0].friends);

                res.data[0].friends.map(friend => {
                    let userToPass = { userID: friend }
                    axios.post("http://localhost:5000/api/findPostsGivenUserID", userToPass)
                        .then(res => {
                            console.log("geting posts: ", res.data);
                            res.data.map(post => {
                                setPostsToShow(postsToShow => [...postsToShow, post]);
                            })
                        })
                        .catch();
                }

                )

            })
            .catch()

    }, [])

    return (
        <div className="feed">
            <Header pageTitle="feed" />
            <Footer activePage="feed" />
            <Link to="/new-post">
                <Button className="add-new-post">
                    <img src={AddNew} />
                </Button>
            </Link>
            <Container className="content">
                <Row>
                    {
                        postsToShow.length === 0 ?
                            <div>
                                <h3>Nothing to see here. Follow people to fill up your feed!</h3>
                            </div> :

                            postsToShow.map(item => {
                                return (
                                    <Col className="post-tile" xs={6} md={6}>
                                        <img className="post-img" src={item.picture} />
                                        <h3 className="post-title">{item.title}</h3>

                                        <Col>
                                            <h4 className="post-type">{item.isRecipe ? "Recipe" : "Restaurant"}</h4>
                                        </Col>


                                    </Col>
                                )
                            })

                    }
                </Row>
            </Container>
        </div>
    )
}

export default Home
