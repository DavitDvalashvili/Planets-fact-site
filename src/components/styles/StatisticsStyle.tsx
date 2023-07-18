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
`;

export default StatisticStyle;
