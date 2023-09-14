import { createGlobalStyle } from "styled-components";

export const GlobalStyle  = createGlobalStyle`
    body {
        text-align: center;
        font-family: ${props => props.theme.fonts};
        margin: 0;
        padding: 0;
        background-color: ${props => props.theme.colors.brownishGray};
    }
`