
import styled from 'styled-components'
import { gridParent } from '../../layout/grid'

export const GridWrapper = styled.div`
    ${gridParent}
    ${({ theme }) => theme.text.heading}

    & > header {
        grid-column: 1 / 12;
        text-align: left;
        ${({ theme }) => theme.mq.atTablet`
            grid-column: 2 / 13;
        `}

    }

    & > main {
        grid-column: 1 / 13;

        ${({ theme }) => theme.mq.atTablet`
            grid-column: 6 / 12;
        `}
    }

    & > section {
        grid-column: 1 / 13;

        ${({ theme }) => theme.mq.atTablet`
            grid-column: 1 / 13;
        `}
    }
`

export const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    ${({ theme }) => theme.mq.atTablet`
        margin-top: 10vh;
    `}
`

export const Paragraph = styled.p`
    ${({ theme }) => theme.text.medium}
    color: var(--offBlack);
    font-weight: 400;
    text-align: left;

    width: 100%;

`

export const ButtonPositioner = styled.div`
    text-align: right;
`
