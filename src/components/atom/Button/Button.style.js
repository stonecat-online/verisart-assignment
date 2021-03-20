import styled from 'styled-components'

export const Wrapper = styled.div`

    & > a {
        /* text-decoration: none; */
        ${({ theme }) => theme.text.medium}
        color: var(--offBlack);
    }
    & > a:visited {
      
        color: var(--violet);
    }
`