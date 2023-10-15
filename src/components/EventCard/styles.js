import styled, { css } from "styled-components"

export const CardEvento = styled.div`
    width: 20rem;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 5px;
    box-shadow: 0 0 5px gray;
    transition: 0.4s;

    img {
        width: 100%;
        height: 50%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        &:hover  {
            /* este & é referente a tag img */
        }
    }

    &:hover {
        /* é referente ao card do evento */
        transform: scale(1.03);
    }

   /*  ${props => props.dataJaPassou && css`
        display: none;
    `} */
`

/* Posso estender componentes e captar as propriedades css deles */
export const CardEventoAzul = styled(CardEvento)`
    background-color: blue;
`