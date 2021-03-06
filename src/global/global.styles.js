import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Josefin Sans', sans-serif;
    scroll-behavior: smooth;
}

html,body{
    overflow-x:hidden;
}

section {
    scroll-behavior:smooth;
}
`
export default GlobalStyle;