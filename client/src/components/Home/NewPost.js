import React, { useState, useEffect, useRef } from 'react'
import axios from "axios"
import Header from "../Layout/Header"
import Footer from "../Layout/FooterMenu"

import { Row, Col, Button } from "react-bootstrap"

import "./NewPost.css"

const NewPost = () => {

    const [currentTab, changeSelect] = useState(0)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [streetOne, setStreetOne] = useState("")
    const [streetTwo, setStreetTwo] = useState("")
    const [city, setCity] = useState("")
    const [province, setProvince] = useState("")
    const [country, setCountry] = useState("")
    const [cookingTime, setCookingTime] = useState(0)
    const [servings, setServings] = useState(0)
    const [ingredients, setIngredients] = useState("")
    const [directions, setDirections] = useState("")
    const [fileName, setFileName] = useState("")
    const [restaurantName, setRestName] = useState("")

    const handleTitleChange = (event) => setTitle(event.target.value)
    const handleDescriptionChange = (event) => setDescription(event.target.value)
    const handleStreetOneChange = (event) => setStreetOne(event.target.value)
    const handleStreetTwoChange = (event) => setStreetTwo(event.target.value)
    const handleCityChange = (event) => setCity(event.target.value)
    const handleProvinceChange = (event) => setProvince(event.target.value)
    const handleCountryChange = (event) => setCountry(event.target.value)
    const handleCookingTime = (event) => setCookingTime(event.target.value)
    const handleServings = (event) => setServings(event.target.value)
    const handleIngredients = (event) => setIngredients(event.target.value)
    const handleDirections = (event) => setDirections(event.target.value)
    const handleFileName = (event) => { setFileName(event.target.files[0].name); window.localStorage.setItem('picture-url', event.target.files[0].name); }
    const handleRestaurantName = (event) => setRestName(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault();

        const uploadNewPost = {
            userID: window.localStorage.getItem("userID"),
            title: title,
            restaurantName: restaurantName,
            description: description,
            picture: "https://storage.googleapis.com/eatspo/" + encodeURI(window.localStorage.getItem("pictureURL")),
            streetOne: streetOne,
            streetTwo: streetTwo,
            city: city,
            province: province,
            country: country,
            isRecipe: currentTab,
            cookingTime: cookingTime,
            servings: servings,
            ingredients: ingredients,
            directions: directions
        }

        axios.post('http://localhost:5000/api/posts', uploadNewPost)
            .then(res => {
                console.log(res.data);
                window.location.replace("http://localhost:3000/feed");
            })
            .catch(err => console.log(err))
    }

    const handleChangeSelect = (event, num) => {
        changeSelect(num)
    }

    return (
        <div className="new-post">
            <Header pageTitle="new post" />
            <div className="content">

                <div>
                    <Row className="tab-selector">
                        <Col className={currentTab == 0 ? "active" : ""}
                            onClick={e => handleChangeSelect(e, 0)}
                        >
                            Restaurant
                        </Col>
                        <Col className={currentTab == 1 ? "active" : ""}
                            onClick={e => handleChangeSelect(e, 1)}>
                            Recipe
                        </Col>
                    </Row>
                </div>

                <div className="upload">

                    <input type="file"
                        onChange={handleFileName} />
                    <a href="http://localhost:5000/uploader"><button>Submit</button></a>

                    {(window.localStorage.getItem("pictureURL") != undefined && window.localStorage.getItem("pictureURL").length > 0) ? <div>Uploaded {window.localStorage.getItem("pictureURL")}</div> : null}
                </div>

                <form className="new-post-form" onSubmit={handleSubmit}>

                    <div className="form-floating">
                        <input
                            required
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            onChange={handleTitleChange}
                            value={title}
                            placeholder="Post Title"
                        />
                        <label for="floatingInput">Post Title</label>
                    </div>

                    <div class="form-floating">
                        <input
                            required
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            onChange={handleDescriptionChange}
                            value={description}
                            placeholder="Description"
                        />
                        <label for="floatingInput">Description</label>
                    </div>

                    <div className={currentTab == 0 ? "form-floating" : "d-none form-floating"}>
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            onChange={handleRestaurantName}
                            value={restaurantName}
                            placeholder="Restaurant Name"
                        />
                        <label for="floatingInput">Restaurant Name</label>
                    </div>

                    <div className={currentTab == 0 ? "form-floating" : "d-none form-floating"}>
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            onChange={handleStreetOneChange}
                            value={streetOne}
                            placeholder="Street Line 1"
                        />
                        <label for="floatingInput">Street Line 1</label>
                    </div>

                    <div className={currentTab == 0 ? "form-floating" : "d-none form-floating"}>
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            onChange={handleStreetTwoChange}
                            value={streetTwo}
                            placeholder="Street Line 2"
                        />
                        <label for="floatingInput">Street Line 2</label>
                    </div>

                    <div className={currentTab == 0 ? "form-floating" : "d-none form-floating"}>
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            onChange={handleCityChange}
                            value={city}
                            placeholder="City"
                        />
                        <label for="floatingInput">City</label>
                    </div>

                    <div className={currentTab == 0 ? "form-floating" : "d-none form-floating"}>
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            onChange={handleProvinceChange}
                            value={province}
                            placeholder="Province"
                        />
                        <label for="floatingInput">Province</label>
                    </div>

                    <div className={currentTab == 0 ? "form-floating" : "d-none form-floating"}>
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            onChange={handleCountryChange}
                            value={country}
                            placeholder="Country"
                        />
                        <label for="floatingInput">Country</label>
                    </div>

                    <div className={currentTab == 1 ? "form-floating" : "d-none form-floating"}>
                        <input
                            type="number"
                            class="form-control"
                            id="floatingInput"
                            onChange={handleCookingTime}
                            value={cookingTime}
                            placeholder="Cooking Time (minutes)"
                        />
                        <label for="floatingInput">Cooking Time (minutes)</label>
                    </div>

                    <div className={currentTab == 1 ? "form-floating" : "d-none form-floating"}>
                        <input
                            type="number"
                            class="form-control"
                            id="floatingInput"
                            onChange={handleServings}
                            value={servings}
                            placeholder="Servings"
                        />
                        <label for="floatingInput">Servings</label>
                    </div>

                    <div className={currentTab == 1 ? "form-floating" : "d-none form-floating"}>
                        <input
                            type="number"
                            class="form-control"
                            id="floatingInput"
                            onChange={handleIngredients}
                            value={ingredients}
                            placeholder="Ingredients"
                        />
                        <label for="floatingInput">Ingredients</label>
                    </div>

                    <div className={currentTab == 1 ? "form-floating" : "d-none form-floating"}>
                        <input
                            type="number"
                            class="form-control"
                            id="floatingInput"
                            onChange={handleDirections}
                            value={directions}
                            placeholder="Directions"
                        />
                        <label for="floatingInput">Directions</label>
                    </div>

                    <div className="post-button">
                        <Button
                            type="submit"
                            variant="dark">
                            Post
                        </Button>
                    </div>
                </form>
            </div>
            <Footer activePage="feed" />

        </div >
    )
}

export default NewPost
