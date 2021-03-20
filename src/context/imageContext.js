import React, { useEffect, useState } from 'react';
import { getCertificates } from '../services/content'

export const ImageContext = React.createContext('image-context-default');

const ImageProvider = props => {

    const [userCertificateList, setUserCertificateList] = useState([]);

    const [userCertificateDetails, setUserCertificateDetails] = useState({
        title: '',
        artist: '',
        year: '',
    });

    const [uploadedImage, setUploadedImage] = useState(
        {
            imgUrl: null
        }
    );

    useEffect(async () => {
        const rawData = await getCertificates()

        setUserCertificateList(rawData.map((item) => {
            return { ...item, image: `${process.env.PUBLIC_URL}/${item.image}.jpg` }
        }))
    }, [])



    const updateUserCertificate = e => {
        setUserCertificateDetails({
            ...userCertificateDetails,
            [e.target.id]: e.target.value,
        })
    }

    const uploadImage = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setUploadedImage({
                imgUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    const addLicenseObjectToList = () => {
        const userCertificateWithImage = { ...userCertificateDetails, image: uploadedImage.imgUrl }
        const newArray = [userCertificateWithImage].concat(userCertificateList)
        setUserCertificateList(newArray)
    }

    return (
        <ImageContext.Provider
            value={{
                uploadedImage,
                setUploadedImage: uploadImage,
                userCertificateDetails,
                updateUserCertificate: updateUserCertificate,
                userCertificateList,
                addLicenseObjectToList: addLicenseObjectToList
            }}>
            {props.children}
        </ImageContext.Provider>
    )
};


export default ImageProvider