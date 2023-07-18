import styled from "styled-components";
import DefaultTheme from "../../DefaultTheme";

const HeaderStyles = styled.div`
  color: ${DefaultTheme.colors.White};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px 17px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  h1 {
    font-family: Antonio;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.76px;
  }
  nav {
    position: absolute;
    top: 69px;
    left: 0px;
    width: 100vw;
    background-color: ${DefaultTheme.colors.MysteriousDepths};
    ul {
      margin: 24px;
      margin-bottom: 70px;
      .list {
        padding: 22px 0px 23px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        list-style-type: none;
        color: ${DefaultTheme.colors.White};
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 1.364px;
        text-transform: uppercase;
        border-bottom: solid 1px rgba(255, 255, 255, 0.1);
        cursor: pointer;
        div {
          display: flex;
          align-items: center;
          gap: 24px;
          .bullet {
            width: 20px;
            height: 20px;
            border-radius: 50px;
          }
        }
        :nth-of-type(1) {
          .bullet {
            background-color: ${DefaultTheme.colors.FairyTaleBlue};
          }
        }
        :nth-of-type(2) {
          .bullet {
            background-color: ${DefaultTheme.colors.GoldenKoi};
          }
        }
        :nth-of-type(3) {
          .bullet {
            background-color: ${DefaultTheme.colors.HokkaidoLavender};
          }
        }
        :nth-of-type(4) {
          .bullet {
            background-color: ${DefaultTheme.colors.DizzyDays};
          }
        }
        :nth-of-type(5) {
          .bullet {
            background-color: ${DefaultTheme.colors.BloodMoon};
          }
        }
        :nth-of-type(6) {
          .bullet {
            background-color: ${DefaultTheme.colors.RustyNail};
          }
        }
        :nth-of-type(7) {
          .bullet {
            background-color: ${DefaultTheme.colors.Tealish};
          }
        }
        :nth-of-type(8) {
          .bullet {
            background-color: ${DefaultTheme.colors.RetroBlue};
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    display: block;
    text-align: center;
    padding: unset;
    padding: 32px 0px 27px 0px;
    nav {
      position: unset;
      width: unset;
      margin-top: 39px;
      ul {
        margin: unset;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 33px;
        .list {
          padding: unset;
          border-bottom: unset;
          line-height: 25px;
          font-size: 11px;
          letter-spacing: 1px;
        }
      }
    }
  }
  @media (min-width: 1440px) {
    padding: 0px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    h1 {
      margin: 22px 0px 0px 32px;
    }
    nav {
      margin: 0px 41px 0px 0px;
      ul {
        .list {
          border-top: 4px solid transparent;
          padding: 29px 0px 27px 0px;
          transition: all 0.7s ease;
        }
        .list:nth-of-type(1) {
          &:hover {
            border-color: ${DefaultTheme.colors.FairyTaleBlue};
          }
        }
        .list:nth-of-type(2) {
          &:hover {
            border-color: ${DefaultTheme.colors.GoldenKoi};
          }
        }
        .list:nth-of-type(3) {
          &:hover {
            border-color: ${DefaultTheme.colors.HokkaidoLavender};
          }
        }
        .list:nth-of-type(4) {
          &:hover {
            border-color: ${DefaultTheme.colors.DizzyDays};
          }
        }
        .list:nth-of-type(5) {
          &:hover {
            border-color: ${DefaultTheme.colors.BloodMoon};
          }
        }
        .list:nth-of-type(6) {
          &:hover {
            border-color: ${DefaultTheme.colors.RustyNail};
          }
        }
        .list:nth-of-type(7) {
          &:hover {
            border-color: ${DefaultTheme.colors.Tealish};
          }
        }
        .list:nth-of-type(8) {
          &:hover {
            border-color: ${DefaultTheme.colors.RetroBlue};
          }
        }
      }
    }
  }
`;

export default HeaderStyles;
