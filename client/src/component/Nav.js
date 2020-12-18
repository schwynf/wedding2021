import React, { useEffect, useState } from "react";
import axios from "axios"
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "./Nav.css"

const Nav = () => {
    return (
        <>
        <nav className="navbar navbar-expand navbar-light bg-light fixed-top" id="nav" style={{fontFamily:'Sansita Swashed'}}>
            <a className="navbar-brand font-weight-bolder" href="/">S&K</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link activeClass="active" to="our-story" spy={true} smooth={true} offset={-50} duration={600}>
                        <a className="nav-link">Story</a> 
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link activeClass="active" to="wedding-party" spy={true} smooth={true} offset={-50} duration={600}>
                        <a className="nav-link">Party</a> 
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link activeClass="active" to="scoll" spy={true} smooth={true} offset={-50} duration={600}>
                        <a className="nav-link">Travel</a> 
                        </Link>
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