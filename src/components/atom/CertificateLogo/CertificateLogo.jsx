import React from 'react';
import { Link } from "react-router-dom";
import { Wrapper } from './CertificateLogo.style';

function Icon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="prefix__feather prefix__feather-award"
            {...props}
        >
            <circle cx={12} cy={8} r={7} />
            <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
        </svg>
    )
}

const CertificateLogo = () => {

    return (
        <Wrapper>
            <Icon />
        </Wrapper>
    )
}

export default CertificateLogo
