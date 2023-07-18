import styled from "styled-components";
import DefaultTheme from "../../DefaultTheme";
import { CategoryType } from "../../Types";

const PlanetStyles = styled.div<CategoryType>`
  color: ${DefaultTheme.colors.White};
  font-weight: 700;
  .categories {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1.929px;
    text-transform: uppercase;
    line-height: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 24px;
    div {
      cursor: pointer;
      padding: 20px 0px 17px 0px;
      border-bottom: 4px solid transparent;
      &:nth-of-type(${(props) => props.categoryINdex}) {
        border-color: ${(props) => props.ChooseColor(props.activeIndex)};
      }
    }
  }
`;
export default PlanetStyles;
