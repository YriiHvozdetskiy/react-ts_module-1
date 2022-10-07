import {createGlobalStyle} from 'styled-components';
import '../node_modules/normalize.css/normalize.css';
// @ts-ignore
import Montserrat  from './fonts/Montserrat-Bold.ttf'



export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: Montserrat;
    src: url(${Montserrat}) format("woff"), url("fonts/Montserrat-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  h2 {
    font-family: Montserrat, sans-serif;
  }

  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :focus,
  :active {
    // outline: none;
  }

  a:focus,
  a:active {
    // outline: none;
  }

  html,
  body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Montserrat ,sans-serif;
    //color: $primary-text-color;
    //text-rendering: optimizeLegibility;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input,
  button,
  textarea,
  optgroup,
  select {
    //font-family: $font-family;
    font-size: inherit;
  }

  button {
    cursor: pointer;
    color: inherit;
    background-color: inherit;
    //прибрати синє миготіння в хромі при кліку
    -webkit-tap-highlight-color: transparent;
  }

  picture {
    display: block;
  }

  p {
    margin: 0;
    padding: 0;
  }

  a {
    cursor: pointer;
    display: inline-block;
    color: inherit;
    //прибрати синє миготіння в хромі при кліку
    -webkit-tap-highlight-color: transparent;
  }

  a:link,
  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  ol,
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    //vertical-align: top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
    padding: 0;
    margin: 0;
  }

  blockquote {
    margin: 0;
    padding: 0;
  }

  //прибрати стрілки для input type="number"
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  body {
    // Скрол заблокаваний
    //&.no-scroll {
    //  overflow: hidden;
    //  touch-action: none;
    //  overscroll-behavior: none;
    //}
  }

  //.app {
  //  overflow: hidden;
  //  display: flex;
  //  flex-direction: column;
  //  min-height: 100%;
  //}

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .main {
    flex: 1 1 auto;
  }

  .container {
    //max-width: $containerWidth;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
`;