import React, { useEffect, useState } from "react";
import { SocialIcon } from 'react-social-icons';

const Header = (props) => {
    return (
        <>
            <div className="text-center text-danger mb-1" style={{fontFamily:'Sansita Swashed', fontSize:"2rem"}}>
               {props.title}
            </div>
        </>
    )
}

export default Header;