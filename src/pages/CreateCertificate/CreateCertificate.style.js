import styled from 'styled-components';
import { gridParent } from '../../layout/grid'


export const Wrapper = styled.div`
    ${gridParent}
    
    & > header {
        grid-column: 1 / 13;
        text-align: left;
        ${({ theme }) => theme.mq.atTablet`
            grid-column: 2 / 13;
        `}
        & > h1 {
            color: var(--offBlack);
            ${({ theme }) => theme.text.heading}
        }
        & > a {
            position: relative;
            top: 15px;
            color: var(--offBlack);
            font-weight: 700 !important;
            ${({ theme }) => theme.text.small}
        }
    }



    & > main {
        grid-column: 1 / 13;
        margin: 10vh 0;

        ${({ theme }) => theme.mq.atTablet`
            grid-column: 2 / 7;
        `}
    }

    & > section {
        grid-column: 1 / 13;

        ${({ theme }) => theme.mq.atTablet`
            grid-column: 1 / 13;
        `}
    }

    & > div {
        grid-column: 1 / 13;

        ${({ theme }) => theme.mq.atTablet`
            grid-column: 8 / 13;
        `}
        ${({ theme }) => theme.mq.atTablet`
            grid-column: 8 / 12;
        `}
    }
`