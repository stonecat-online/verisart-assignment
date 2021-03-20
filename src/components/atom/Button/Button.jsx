import React from 'react';
import { Link } from "react-router-dom";
import { Wrapper } from './Button.style';


const Button = ({ value, linkTo }) => {
    return (
        <Wrapper>
            <Link to={linkTo} >{value}</Link>
        </Wrapper>
    );
}

export default Button;