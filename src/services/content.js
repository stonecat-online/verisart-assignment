
export const getCertificates = async (url = 'http://localhost:3004/certificates') => {
    const response = await fetch(url)
    return await response.json()
}

