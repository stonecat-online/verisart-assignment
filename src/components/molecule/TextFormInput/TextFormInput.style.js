import styled from 'styled-components'

export const Wrapper = styled.div`
   display: inline-flex;
   flex-direction: column;
    text-align: left;
    width: 100%;

    & > label {
        color : var(--violet); 
        font-weight: 700 !important; 
        ${({ theme }) => theme.text.small}
    }


`

export const FormInput = styled.input`
    display: inline-block;
    padding: 15px;
    border: none;
    background-color : var(--lightViolet); 
    ${({ theme }) => theme.text.small}
    color: white;
    margin: 10px 0 10px 0 ;
    min-width: 140px;
    width: calc(100% - 20px);

    ${({ theme }) => theme.mq.atTablet`
        width: 60%;
        margin: 10px 10px 10px 0 ;

    `}

    &:focus {
        transition: all ease 0.4s;
        background-color : var(--violet); 
        outline: none;
    }
   
`