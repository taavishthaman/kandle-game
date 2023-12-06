import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyles;
