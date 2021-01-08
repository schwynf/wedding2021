import React, { useEffect, useState } from "react";
import axios from "axios"
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "./Nav.css"

const Nav = () => {

    
        return (
            <>
            <nav className="navbar navbar-expand navbar-light bg-light fixed-top" id="nav" style={{fontFamily:'Sansita Swashed'}}>
                    {/* <Link activeClass="active" to="firstRow" spy={true} smooth={true} offset={-57} duration={600}>
                <a className="navbar-brand font-weight-bolder text-center" id="nav">S&K</a>
                    </Link> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link activeClass="active" to="when-content" spy={true} smooth={true} offset={-56} duration={800}>
                            <a className="nav-link" id="story">Details</a> 
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link activeClass="active" to="registry-rvsp-content" spy={true} smooth={true} offset={-56} duration={800}>
                            <a className="nav-link">RSVP</a> 
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link activeClass="active" to="wedding-pic" spy={true} smooth={true} offset={-50} duration={600}>
                            <a className="nav-link">Story</a> 
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