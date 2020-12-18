import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactModal from "../component/ContactModal"
import Nav from "../component/Nav"
import profilePic from "../images/profilePic.jpg"
import "./OurStory.css"
import Header from "../component/Header"

const OurStory = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(email + password)
        if (email && password) {
            axios.post("/login", { email: email, password: password }).then(({ data }) => {
                console.log(data)
                if (data.user) {
                    window.location.href = "/"
                }
            }).catch((error) => { console.log(error) })
        }
    };

    return (
        <>
            <div className="text-center">
                <Header title="Our Story"></Header>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={profilePic} alt="First slide"></img>
                            <div class="carousel-caption d-md-block">
                                <h5>sssssssssss</h5>
                                <p>fffffffff</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={profilePic} alt="Second slide"></img>
                            <div class="carousel-caption  d-md-block">
                                <h5>ssssss</h5>
                                <p>fffffffff</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={profilePic} alt="Third slide"></img>
                            <div class="carousel-caption  d-md-block">
                                <h5>ssssss</h5>
                                <p>fffffffff</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default OurStory;

