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
            <div class="container">
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
                {/* {new} */}
                <div className="row" id="when-where">
                    <div className="col-md-6 when-where">
                        <div className="text-center mt-5">join us!</div>
                        <h1 className="where-font text-center">
                            When
                        </h1>
                        <h1 className="where-font text-center"> &Where</h1>
                    </div>
                    
                    <div className="col-md-6 when-done time-font pt-5 text-center tt">
                    <div>SATURDAY, 08.09.20 Scottsdale, 1026 Pakiri Rd, Pakiri 0972</div>
                        <div className="text-left bg-danger" id="1">3pm Arrival</div>
                        <div className="text-left mt-3" id="2">5pm Ceremony</div>
                        <div className="text-left mt-3 bg-danger" id="3">6pm Celebration</div>
                    </div>
                </div>
                <ContactModal></ContactModal>
            </div>
        </>
    )
}

export default Home;