import styled from "styled-components";

const StatisticStyle = styled.div`
  padding: 28px 24px 39px 24px;
  text-transform: uppercase;
  div {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 24px 9px 24px;
    h4 {
      font-size: 8px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0.727px;
      text-transform: uppercase;
      opacity: 0.5;
    }
    span {
      font-family: Antonio;
      font-size: 20px;
      font-weight: 400;
      letter-spacing: -0.75px;
    }
  }
  @media (min-width: 768px) {
    padding: 27px 39px 36px 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 11px;
    div {
      width: 164px;
      padding: 16px 15px 19px 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 6px;
      span {
        font-size: 24px;
      }
    }
  }
  @media (min-width: 1440px) {
    gap: 30px;
    padding: 0px 0px 0px 0px;
    div {
      width: 255px;
      margin-bottom: 56px;
      padding: 20px 23px 27px 23px;
      gap: 4px;
      h4 {
        letter-spacing: 1px;
        font-size: 11px;
      }
      span {
        font-size: 40px;
        letter-spacing: -1.5px;
      }
    }
  }
`;

export default StatisticStyle;
