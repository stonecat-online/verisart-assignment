import React, { useState, useEffect } from 'react';
import { Wrapper } from './CreateCertificate.style'
import { ImageContext } from '../../context/imageContext'
import { Link } from "react-router-dom";
import { CreateCertificateForm } from '../../components/organism';
import { CreateCertificatePreview } from '../../components/molecule';


const CreateCertificate = () => {

    return (
        <Wrapper>
            <header>
                <Link to='/'>Back</Link>
                <h1>Create Certificate</h1>
            </header>
            <ImageContext.Consumer>
                {(value) => (
                    <>
                        <main>
                            <CreateCertificateForm
                                updateForm={value.updateUserCertificate}
                                uploadedImage={value.uploadedImage}
                                setUploadedImage={value.setUploadedImage}
                                addLicenseObjectToList={value.addLicenseObjectToList}
                            />
                        </main>
                        <div>
                            <CreateCertificatePreview
                                formValues={value.userCertificateDetails}
                                uploadedImage={value.uploadedImage}
                            />
                        </div>
                    </>
                )}
            </ImageContext.Consumer>
        </Wrapper>
    );
}

export default CreateCertificate;