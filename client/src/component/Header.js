import React, { useEffect, useState } from "react";
import "./Header.css"

const Header = (props) => {
    return (
        <>
            <div className="text-center header" style={{fontFamily:'Sansita Swashed'}}>
                <p style={{fontSize: "3rem"}}>
                    <cite>{props.title}</cite>
                </p>    
            </div>
        </>
    )
}

export default Header;