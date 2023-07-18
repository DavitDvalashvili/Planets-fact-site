import styled from "styled-components";
import { InfoType } from "../../Types";

const InfoStyle = styled.div<InfoType>`
  .imageBox {
    height: 304px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: ${(props) =>
        props.activeIndex == 0
          ? "111px"
          : props.activeIndex == 1
          ? "154px"
          : props.activeIndex == 2
          ? "173px"
          : props.activeIndex == 3
          ? "129px"
          : props.activeIndex == 4
          ? "224px"
          : props.activeIndex == 5
          ? "256px"
          : props.activeIndex == 6
          ? "176px"
          : props.activeIndex == 7
          ? "173px"
          : "auto"};
    }
  }
  .textBox {
    margin: 0px 24px;
    text-align: center;
    .textWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      h1 {
        font-family: Antonio;
        font-size: 40px;
        text-transform: uppercase;
      }
      p {
        margin: 32px 0px 16px 0px;
        font-weight: 400;
        font-size: 11px;
        line-height: 22px;
        opacity: 0.7;
        max-width: 350px;
      }
      .source {
        font-weight: 400;
        font-size: 12px;
        opacity: 0.5;
        line-height: 25px;
        span:nth-of-type(2) {
          font-weight: 700;
          text-decoration: underline;
          margin: 0px 4px 0px 3px;
        }
        img {
          margin-bottom: -4px;
        }
      }
    }
  }
`;

export default InfoStyle;
