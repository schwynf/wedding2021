import React, { useEffect, useState } from "react";
import weddingPic from "../images/profilePic.jpg"
import Header from "./Header"
import "./HomeContent.css"

const HomeContent = () => {
    return (
        <>
           <Header title={"Schwyn & Kalee"}></Header>
            <div className="text-center">
            <img src={weddingPic} id="weddingPic"  className="shadow-lg" alt="Profile Img"></img>
            </div>
            <div className="text-center text-danger mb-1" style={{fontFamily:'Sansita Swashed', fontSize:"2rem"}}>
               Getting Married! <br></br>
                <div style={{fontFamily:'Sansita Swashed', fontSize:"1rem"}}>10-9-2021 | Scottsdale, AZ {''}</div>
            </div>
        </>
    )
}

export default HomeContent;