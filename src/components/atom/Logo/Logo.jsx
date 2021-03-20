import React from 'react';
import { Link } from "react-router-dom";
import { Wrapper } from './Logo.style';


const Logo = () => {
    return (
        <Wrapper>
            <Link to="/">Verisart.</Link>
        </Wrapper>
    );
}

export default Logo;