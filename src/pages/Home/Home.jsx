import React, { useEffect, useState } from 'react';
import { ImageContext } from '../../context/imageContext'
import { GridWrapper, MainWrapper, Paragraph, ButtonPositioner } from './Home.style'
import { ImageGallery } from '../../components/organism'
import { Logo, Button } from '../../components/atom'

const Home = () => {

    const [certificateCollection, setCertifcateCollection] = useState([])



    useEffect(() => {
        // console.log('the DATA ', certificateCollection)
    }, [certificateCollection])

    return (
        <GridWrapper>
            <header>
                <Logo />
            </header>
            <MainWrapper>
                <Paragraph>We’re an award-winning certification service to help you easily create professional Certificates of Authenticity securely registered on the blockchain.</Paragraph>
                <ButtonPositioner>
                    <Button value={'Create Certificate'} linkTo="/create-certificate" />
                </ButtonPositioner>
            </MainWrapper>
            <section>
                <ImageContext.Consumer>
                    {(value) =>
                        <ImageGallery imageList={value.userCertificateList} />
                    }
                </ImageContext.Consumer>
            </section>
        </GridWrapper>
    );
}

export default Home;