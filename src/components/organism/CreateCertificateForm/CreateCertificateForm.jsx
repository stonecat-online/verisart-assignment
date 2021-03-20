import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import { Wrapper, ButtonWrapper } from './CreateCertificateForm.style'
import { TextFormInput } from '../../molecule'


const CreateCertificateForm = ({ formValues, updateForm, setUploadedImage, addLicenseObjectToList }) => {

    return (
        <Wrapper>
            <TextFormInput id={'title'} title={'Artwork Name'} formValues={formValues} updateForm={updateForm} />
            <TextFormInput id={'artist'} title={'Artist Name'} formValues={formValues} updateForm={updateForm} />
            <TextFormInput id={'year'} title={'Production Date'} formValues={formValues} updateForm={updateForm} />
            <label>Image Upload: </label>
            <input type="file" onChange={(e) => setUploadedImage(e)} />

            <ButtonWrapper onClick={() => addLicenseObjectToList()}>
                <Link to='/' id="create-certificate" >Create and view</Link>
            </ButtonWrapper>
        </Wrapper>
    );
}

export default CreateCertificateForm;