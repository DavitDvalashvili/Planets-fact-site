import { createGlobalStyle } from "styled-components";
import DefaultTheme from "../../DefaultTheme";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'League Spartan', sans-serif;
}
body {
  background-color: ${DefaultTheme.colors.MysteriousDepths};
  background-image: url(../public/assets/background-stars.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  &::-webkit-scrollbar {
  display: none;
}
} 
`;
