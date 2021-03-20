import React, { useEffect } from 'react';
import { Wrapper } from './ImageGridItem.style'
import { CertificateLogo } from '../../atom'

const ImageGridItem = ({ title, artist, date, image }) => {
    const gridSizes = ['grid-column: span 2;grid-row: span 1;', 'grid-column: span 2;grid-row: span 1;', 'grid-column: span 2;grid-row: span 2;', 'grid-row: span 2;grid-column: span 3;', 'grid-column: span 3; grid-row: span 3;', 'grid-row: span 3; grid-column: span 3;']
    const randomGridSize = gridSizes[Math.floor(Math.random() * gridSizes.length)];

    return (
        <Wrapper itemSize={randomGridSize}>
            <div></div>
            <span><CertificateLogo /></span>
            <h3>{title}</h3>
            <h4>{artist}</h4>
            <h5>{date}</h5>
            <img src={image} />
        </Wrapper>
    );
}

export default ImageGridItem;