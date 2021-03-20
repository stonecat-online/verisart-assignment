import styled from 'styled-components'

export const Wrapper = styled.section`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 2em;
   color: #ffeead;
   grid-column: span 8;
   grid-row: span 2;
   ${({ theme }) => theme.mq.atTablet`
         ${({ itemSize }) => itemSize}
   `}

     & > div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--offBlack);
        opacity: 0.2;
        z-index: var(--overBottom);
;
     }

     & > span {
         position: absolute;
        top: 10px;
        left: 10px;
        z-index: var(--overTop);
     }

     & > h3 {
        position: absolute;
        bottom: 50px;
        left: 15px;
        color: white;
        ${({ theme }) => theme.text.small}
        font-weight: 700;
        z-index: var(--overTop);

     }

     & > h4 {
         position: absolute;
         bottom: 22px;
         left: 15px;
         color: white;
         ${({ theme }) => theme.text.xSmall}
         z-index: var(--overTop);
     }

     & > h5 {
         position: absolute;
         bottom: 0;
         left: 15px;
         color: white;
         ${({ theme }) => theme.text.xSmall}
         z-index: var(--overTop);
     }

     & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
     }
`
