import styled from 'styled-components'

export const Wrapper = styled.h1`
    margin: 0;
    & > a {
        text-decoration: none;
        ${({ theme }) => theme.text.heading}
        color: var(--offBlack);
    }
`