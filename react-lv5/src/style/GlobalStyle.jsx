import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
    body {
        font-family: 'Quicksand', sans-serif;
        line-height: 1.6;
        background-color: #A0A0FF;
        max-width: 1200px;
        min-width: 800px;
        margin: 0px auto;
    }
    
`
export default GlobalStyle