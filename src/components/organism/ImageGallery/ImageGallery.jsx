import React, { useState, useEffect } from 'react';
import { Wrapper } from './ImageGallery.style'
import { ImageGridItem } from '../../molecule'



const ImageGallery = ({ imageList = [] }) => {

    const [imageAssets, setImageAssets] = useState([])

    useEffect(() => {
        // console.log('image gallery loading', imageAssets)
    }, [imageAssets])


    return (
        <Wrapper>
            {imageList.map((item, index) => <ImageGridItem
                key={`image-grid-item-${item.title}-${index}`}
                title={item.title}
                artist={item.artist}
                date={item.year}
                image={item.image}
            />)}
        </Wrapper>
    );
}

export default ImageGallery;