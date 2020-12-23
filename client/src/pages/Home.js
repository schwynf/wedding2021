import React, { useEffect, useState } from "react";
import axios from "axios";
import HomePicture from "../images/sedona.jpg"
import  July from "../images/july4thphoto.jpg"
import  Wedding from "../images/wedding.JPG"
import  Redbird from "../images/redbird.JPG"
import HomeContent from "../component/HomeContent"
import ContactModal from "../component/ContactModal"
import EmailModal from "../component/EmailModal"
import Nav from "../component/Nav"
import "./Home.css"
import Confetti from "../component/Confetti"
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Home = () => {

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
            <Confetti></Confetti>
            <Nav></Nav>
            <div class="container-fluid">
                {/* first row */}
                <div className="row mt-5" id="firstRow">
                    <div className="col-md-1 p-0 erase" id="firstDiv">
                    </div>
                    <div className="col-12 col-md-10 p-0" id="gradient">
                        <HomeContent></HomeContent>
                    </div>
                    <div className="col-md-1 p-0 erase" id="please">
                    </div>
                </div>
                {/* Story */}
                <div className="row" id="secondRow">
                    <div className="col-md-1 p-0 erase">
                    </div>
                    <div className="col-12 col-md-10 p-0" id="gradient">
                        <div className="text-center">
                            <p style={{ fontSize: "3rem", fontFamily: 'Sansita Swashed' }}>
                                <cite id="our-story">Our Story</cite>
                            </p>
                            <div id="canvas" className="text-dark">
                                How we met!!!!!!! <br></br>
                                <img src={July} className="mx-auto" id="story-img"></img>
                                <br></br>Dignissim cras tincidunt lobortis feugiat vivamus at. Neque vitae tempus quam pellentesque nec nam aliquam. Orci ac auctor augue mauris. Vel facilisis volutpat est velit egestas dui. Tempus quam pellentesque nec nam aliquam sem et tortor.

                                Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Sed felis eget velit aliquet sagittis id consectetur purus ut. Adipiscing elit pellentesque habitant morbi tristique senectus. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Porttitor lacus luctus accumsan tortor posuere ac. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Vel fringilla est ullamcorper eget nulla facilisi. Nisi vitae suscipit tellus mauris a diam maecenas. Metus aliquam eleifend mi in nulla posuere.
                                <br></br>
                                college Life!!!!!!! <br></br>
                                <img src={Wedding} className="mx-auto" id="story-img"></img>
                                <br></br>Dignissim cras tincidunt lobortis feugiat vivamus at. Neque vitae tempus quam pellentesque nec nam aliquam. Orci ac auctor augue mauris. Vel facilisis volutpat est velit egestas dui. Tempus quam pellentesque nec nam aliquam sem et tortor.

                                Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Sed felis eget velit aliquet sagittis id consectetur purus ut. Adipiscing elit pellentesque habitant morbi tristique senectus. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Porttitor lacus luctus accumsan tortor posuere ac. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Vel fringilla est ullamcorper eget nulla facilisi. Nisi vitae suscipit tellus mauris a diam maecenas. Metus aliquam eleifend mi in nulla posuere.
                                <br></br>
                                college Life!!!!!!! <br></br>
                                <img src={Redbird} className="mx-auto" id="story-img"></img>
                                <br></br>Dignissim cras tincidunt lobortis feugiat vivamus at. Neque vitae tempus quam pellentesque nec nam aliquam. Orci ac auctor augue mauris. Vel facilisis volutpat est velit egestas dui. Tempus quam pellentesque nec nam aliquam sem et tortor.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 p-0 erase">
                    </div>
                </div>
                {/* Party */}
                <div className="row" id="thirdRow">
                    <div className="col-md-1 p-0 erase">
                        <div id="oval"></div>
                    </div>
                    <div className="col-12 col-md-10 p-0" id="gradient">
                        <div className="text-center text-danger" style={{ fontFamily: 'Sansita Swashed' }}>
                            <p style={{ fontSize: "3rem" }}>
                                <cite id="wedding-party">Wedding Party</cite>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-1 p-0 erase">
                    </div>
                </div>
                <ContactModal></ContactModal>
            </div>
        </>
    )
}

export default Home;