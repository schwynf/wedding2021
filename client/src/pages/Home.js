import React, { useEffect, useState } from "react";
import axios from "axios";
import HomePicture from "../component/HomePicture"
import HomeDescription from "../component/HomeDescription"
import ContactModal from "../component/ContactModal"
import EmailModal from "../component/EmailModal"
import Nav from "../component/Nav"

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
            <Nav></Nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-1 p-0">
                    </div>
                    <div className="col-12 col-md-10 p-0">
                    <HomePicture></HomePicture>
                    <HomeDescription></HomeDescription>
                    </div>
                    <div className="col-md-1 p-0">
                    </div>
                </div>
                <ContactModal></ContactModal>
            </div>
        </>
    )
}

export default Home;