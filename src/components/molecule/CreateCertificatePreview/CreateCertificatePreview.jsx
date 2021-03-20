import React, { useEffect } from 'react';
import { Wrapper } from './CreateCertificatePreview.style'
import { CertificateLogo } from '../../atom'

const CreateCertificatePreview = ({ formValues, uploadedImage }) => {
    const { title, artist, year } = formValues
    return (
        <Wrapper >
            <div></div>
            <span><CertificateLogo /></span>
            <h3>{title}</h3>
            <h4>{artist}</h4>
            <h5>{year}</h5>
            <img src={uploadedImage.imgUrl} />
        </Wrapper>
    );
}

export default CreateCertificatePreview;