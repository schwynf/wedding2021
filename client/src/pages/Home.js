import React, { useEffect, useState } from "react";
import axios from "axios";
import HomePicture from "../images/sedona.jpg"
import July from "../images/july4thphoto.jpg"
import Wedding from "../images/wedding.JPG"
import Redbird from "../images/redbird.JPG"
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
                <div className="row" id="when-content">
                    <div className="col-md-6 when-content-pink">
                        <div className="text-center mt-5">join us!</div>
                        <h1 className="when-font text-center">
                            When
                        </h1>
                        <h1 className="when-font text-center"> &Where</h1>
                    </div>
                    <div className="col-md-6 when-content-beige time-font pt-5 text-center tt">
                        <div>FRIDAY, 08.09.2020 <br></br>E Jomax Rd, Phoenix</div>
                        <div className="" id="3"><span className="time">3 pm</span> Arrival</div>
                        <div className="mt-3" id="4"><span className="time">4 pm</span> Ceremony</div>
                        <div className=" mt-3 time-bgcolor" id="5"><span className="time">5 pm</span> Celebration</div>
                    </div>
                </div>
                <div className="row text-center" id="registry-rvsp-content">
                    <div className="col-md-6 mb-0 registry col-sm-offset-6">
                        <h1 className="text-center registry-h1">
                            Schwyn & Kalee Wedding
                        </h1>
                        <button className="btn btn-warning" type="submit">RVSP NOW!</button>
                    </div>
                    <div className="col-md-6 mt-0 rvsp text-center">
                        <h5>Gifts?</h5>
                        <h1 className="text-center registry-h1">
                            Gift<br></br>
                            Registry
                        </h1>
                        <button className="btn btn-warning" type="submit">Wedding Registry</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 wedding-pic text-center">
                        <a id="story-a"href="">OUR STORY</a>
                    </div>
                </div>
                <ContactModal></ContactModal>
            </div>
        </>
    )
}

export default Home;