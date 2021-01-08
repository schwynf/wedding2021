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
import Slide from 'react-reveal/Slide';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Home = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rsvp, setRSVP] = useState(true);

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

    let checkRSVP = (event) => {
        event.preventDefault();
        if (rsvp === true) {
            setRSVP(false);
        } else {
            setRSVP(true)
        }
    }

    let amazon = () => {
        console.log("amazon")
        window.location.href = "https://www.amazon.com/registries";
    }

    return (
        <>
            <Confetti></Confetti>
            <Nav></Nav>
            <div class="container">
                {/* first row */}
                <div className="row" id="firstRow">
                    <div className="col-12 col-md-10 p-0" style={{ margin: "auto" }} id="gradient">
                        <HomeContent></HomeContent>
                    </div>
                </div>
                {/* {Join Us Content} */}
                <div className="row" id="when-content">
                    <div className="col-md-6 when-content-pink">
                        <Slide left duration="1500">
                        <div className="text-center">JOIN US!</div>
                        <br></br>
                        <div id="border"></div>

                        <h1 className="when-font text-center">
                            When
                        </h1>
                        <h1 className="when-font text-center"> &Where</h1>

                        </Slide>
                    </div>
                    <div className="col-md-6 when-content-beige time-font text-center tt">
                        <Slide right duration="2000">

                        <div>FRIDAY, 08.09.2020 <br></br>E Jomax Rd, Phoenix</div>
                        <div className="" id="3"><span className="time">3 pm</span> Arrival</div>
                        <div className="mt-3" id="4"><span className="time">4 pm</span> Ceremony</div>
                        <div className=" mt-3 time-bgcolor" id="5"><span className="time">5 pm</span> Celebration</div>
                        </Slide>
                    </div>
                </div>
                {/* Registry/RSVP */}
                <div className="row text-center" id="registry-rvsp-content">
                    <div className="col-md-6 registry col-sm-offset-6">
                        {rsvp ? (<div><Slide left><h1 className="text-center registry-h1">
                            Schwyn & Kalee Wedding</h1>
                            <button className="btn btn-warning mt-2 but" type="submit" onClick={checkRSVP}>RVSP Now!</button></Slide></div>) : (<div><div>Thanks!!!!!!!</div>
                                <br></br>
                                <br></br>
                                <input className="form-control" type="text" placeholder="Name"></input>
                                <br></br>
                                <input className="form-control" type="text" placeholder="Guest"></input>
                                <br></br>
                                <input className="form-control" type="text" placeholder="Email"></input>
                                <br></br>
                                <button className="btn btn-warning mt-2" type="submit" onClick={checkRSVP}>Submit!</button></div>)}
                    </div>
                    <div className="col-md-6 rvsp text-center">
                        <Slide right>

                        <h1 className="text-center registry-h1">
                            Gift<br></br>
                            Registry
                        </h1>
                        <button className="btn btn-warning registry-button but" type="submit" onClick={amazon}>Wedding Registry</button>
                        </Slide>
                    </div>
                </div>
                <div className="row wedding-pic-content">
                    <div className="col-12 wedding-pic text-center" id="wedding-pic">
                        <div id="our-story"><a id="our-story" href="">Our Story</a></div>
                    </div>
                </div>
                {/* Contact Modal */}
                <ContactModal></ContactModal>
            </div>
        </>
    )
}

export default Home;