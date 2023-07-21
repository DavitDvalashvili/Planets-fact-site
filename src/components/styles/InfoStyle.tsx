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
        cursor: pointer;
        font-weight: 400;
        font-size: 12px;
        opacity: 0.5;
        line-height: 25px;
        a {
          text-decoration: none;
          color: inherit;
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
  }
  @media (min-width: 768px) {
    .imageBox {
      height: 460px;
      img {
        width: ${(props) =>
          props.activeIndex == 0
            ? "184px"
            : props.activeIndex == 1
            ? "253px"
            : props.activeIndex == 2
            ? "285px"
            : props.activeIndex == 3
            ? "213px"
            : props.activeIndex == 4
            ? "369px"
            : props.activeIndex == 5
            ? "422px"
            : props.activeIndex == 6
            ? "290px"
            : props.activeIndex == 7
            ? "285px"
            : "auto"};
      }
    }
    .textBox {
      margin: 0px 39px;
      text-align: left;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 69px;
      .textWrapper {
        align-items: flex-start;
        h1 {
          font-size: 48px;
        }
        p {
          margin: 24px 0px 22px 0px;
          max-width: unset;
          width: 339px;
        }
      }
      .category {
        width: 281px;
        display: flex;
        flex-direction: column;
        gap: 19px;
        cursor: pointer;
        div {
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 8px 20px 7px 20px;
          font-size: 9px;
          font-weight: 700;
          line-height: 25px;
          letter-spacing: 1.929px;
          &:nth-of-type(${(props) => props.categoryIndex}) {
            background-color: ${(props) =>
              props.ChooseColor(props.activeIndex)};
          }
          span {
            margin-right: 14px;
            opacity: 0.5;
          }
        }
      }
    }
  }
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .imageBox {
      height: 754px;
      position: relative;
      img {
        width: ${(props) =>
          props.activeIndex == 0
            ? "290px"
            : props.activeIndex == 1
            ? "400px"
            : props.activeIndex == 2
            ? "450px"
            : props.activeIndex == 3
            ? "336px"
            : props.activeIndex == 4
            ? "582px"
            : props.activeIndex == 5
            ? "666px"
            : props.activeIndex == 6
            ? "458px"
            : props.activeIndex == 7
            ? "450px"
            : "auto"};
      }
      .geology {
        width: 163px;
        position: absolute;
        bottom: 87px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .textBox {
      margin: unset;
      flex-direction: column;
      gap: 39px;
      width: 350px;
      .textWrapper {
        h1 {
          font-size: 80px;
        }
        p {
          margin: 23px 0px 24px 0px;
          width: 100%;
          font-size: 14px;
        }
        .source {
          font-size: 14px;
        }
      }
      .category {
        width: 100%;
        gap: 16px;
        div {
          padding: 12px 28px 11px 28px;
          font-size: 12px;
          letter-spacing: 2.571px;
        }
      }
    }
  }
`;

export default InfoStyle;
