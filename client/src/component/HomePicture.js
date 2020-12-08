import React, { useEffect, useState } from "react";
import profilePic from "../images/profilePic.jpg"
import axios from "axios"
import "./HomePicture.css"

const HomePicture = () => {
    return (
        <>
            <div className="text-center text-primary" style={{fontFamily:'Sansita Swashed'}}>
                <p style={{fontSize: "3rem"}}>
                    <cite>Schwyn & Kalee</cite>
                </p>    
                <img src={profilePic} id="maybe"  className="shadow-lg" alt="Profile Img"></img>
            </div>
        </>
    )
}

export default HomePicture;