import styled from 'styled-components'

export const Wrapper = styled.form`
    display: flex;
    flex-wrap: wrap; 
    width: 100%;
    height: 100%;

    & input[type=file] {
        ${({ theme }) => theme.text.small}
        color: var(--offBlack);


    }

    & > label {
        font-weight: 700 !important; 

        ${({ theme }) => theme.text.small}
        color: var(--violet);
        margin-bottom: 10px;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    & > span {
        background-color: var(--violet);
        font-weight: 700 !important; 
        max-height: 23px;
        ${({ theme }) => theme.text.small}
        padding: 10px;
        margin-top: 20px;
        color: white;
        cursor: pointer;
        border-radius: 5px;
    }

    & > a {
        
        text-decoration: none;
        background-color: var(--violet);
        ${({ theme }) => theme.text.small}
        padding: 10px;
        margin-top: 20px;
        color: white;
        cursor: pointer;
        border-radius: 5px;
    }

    & > img {
        width: 100%;
        height: 100%;
    }
`
