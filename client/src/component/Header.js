import React, { useEffect, useState } from "react";

const Header = (props) => {
    return (
        <>
            <div className="text-center text-primary" style={{fontFamily:'Sansita Swashed'}}>
                <p style={{fontSize: "3rem"}}>
                    <cite>{props.title}</cite>
                </p>    
            </div>
        </>
    )
}

export default Header;