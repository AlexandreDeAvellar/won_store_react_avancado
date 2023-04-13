import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::before, &::after {
      box-sizing: inherit;
    }
  }

${({ theme }) => css`
  html {
    font-size: 62.5%;
  }

  html,
  body,
  #__next {
    height: 100%;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    background-color: ${theme.colors.mainBg};
  }
`}
`

export default GlobalStyles
