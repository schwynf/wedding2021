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
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Carousel from 'react-bootstrap/Carousel'

const Home = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [guest, setGuest] = useState("");
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

    let checkRSVP = async (event) => {
        setRSVP(false)
    }

    const submitButton = async (event) => {
        event.preventDefault();
        let data = await axios.post("/email", {name: name, guest: guest, email: email});
        console.log(data);
        setRSVP(true);
        setEmail("");
        setName("");
        setGuest("");
    }

    let amazon = () => {
        console.log("amazon")
        window.location.href = "https://www.amazon.com/registries";
    }

    return (
        <>
            <Confetti></Confetti>
            <Nav></Nav>
            <div className="container">
                {/* first row */}
                <div className="row" id="firstRow">
                    <div className="col-12 col-md-10 p-0" style={{ margin: "auto" }} id="gradient">
                        <HomeContent></HomeContent>
                    </div>
                </div>
                {/* {Join Us Content} */}
                <div className="row" id="when-content">
                    <div className="col-md-6 when-content-pink">
                        <Slide left>

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

                        <Zoom bottom>

                            <div>FRIDAY, 08.08.2021 <br></br>E Jomax Rd, Phoenix</div>
                            <div className="" id="3"><span className="time">3 pm</span> Arrival</div>
                            <div className="mt-3" id="4"><span className="time">4 pm</span> Ceremony</div>
                            <div className=" mt-3 time-bgcolor" id="5"><span className="time">5 pm</span> Celebration</div>
                        </Zoom>


                    </div>
                </div>
                {/* Registry/RSVP */}
                <div className="row text-center" id="registry-rvsp-content">
                    <div className="col-md-6 registry col-sm-offset-6">
                        {rsvp ? (<div><h1 className="text-center registry-h1">
                            Schwyn & Kalee Wedding</h1>
                            <button className="btn btn-warning mt-2 but" type="submit" onClick={checkRSVP}>RVSP Now!</button></div>) : (<div><div>Thanks!!!!!!!</div>
                                <br></br>
                                <br></br>
                                <input onChange={event => setName(event.target.value)} value={name} className="form-control" type="text" placeholder="Name"></input>
                                <br></br>
                                <input onChange={event => setGuest(event.target.value)} value={guest} className="form-control" type="text" placeholder="Guest"></input>
                                <br></br>
                                <input onChange={event => setEmail(event.target.value)} value={email} className="form-control" type="text" placeholder="Email"></input>
                                <br></br>
                                <button className="btn btn-warning mt-2" type="submit" onClick={submitButton}>Submit!</button></div>)}
                    </div>
                    <div className="col-md-6 rvsp text-center">


                        <h1 className="text-center registry-h1">
                            Gift<br></br>
                            Registry
                        </h1>
                        <button className="btn btn-warning registry-button but" type="submit" onClick={amazon}>Wedding Registry</button>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pl-0 pr-0 wedding-car">
                    <Carousel className="carousel-div" id="wedding-pic">
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100 carousel"
                            src={Redbird}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100 carousel"
                            src={Wedding}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100 carousel"
                            src={Redbird}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                    </div>
                </div>
                


                {/* <div className="row wedding-pic-content">
                    <div className="col-12 wedding-pic text-center" id="wedding-pic">
                        <div id="our-story"><a id="our-story" href="">Our Story</a></div>
                    </div>

                </div> */}
                {/* Contact Modal */}
                <div className="fixed">
                    It's a celebration!
                </div>
                <div className="fixed1">
                    October 8th, 2021
                </div>
                <ContactModal></ContactModal>
            </div>
        </>
    )
}

export default Home;