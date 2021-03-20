import styled from 'styled-components'

export const Wrapper = styled.section`
        display: grid;
        grid-gap: 15px;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-auto-rows: 200px;
        grid-auto-flow: dense;
        height: auto;
        margin-top: 15vh;
`

export const GridItem = styled.div`

/* 
    & .horizontal {
        grid-column: span 2;
    }

    & .vertical {
        grid-row: span 2;
    }

    & .big {
        grid-column: span 2;
        grid-row: span 2;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    } */
   
`