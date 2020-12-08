import React, { useEffect, useState } from "react";
import axios from "axios"
import "./Nav.css"

const Nav = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="nav" style={{fontFamily:'Sansita Swashed', color:"red"}}>
            <a className="navbar-brand font-weight-bolder" href="/">S&K</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" style={{color:"red"}}id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#secondRow">Our Story</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#thirdRow">Wedding Party</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Travel">Travel</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="" data-toggle="modal" data-target="#exampleModal">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    )
}

export default Nav;