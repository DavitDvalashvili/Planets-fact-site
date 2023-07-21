import { createGlobalStyle } from "styled-components";
import DefaultTheme from "../../DefaultTheme";
import cover from "./../../../public/assets/background-stars.svg";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'League Spartan', sans-serif;
}
body {
  background-color: ${DefaultTheme.colors.MysteriousDepths};
  background-image: url(${cover});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  &::-webkit-scrollbar {
  display: none;
}
} 
`;
