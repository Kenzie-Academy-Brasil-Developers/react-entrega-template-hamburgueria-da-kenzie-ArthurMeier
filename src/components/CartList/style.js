import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-right: 16px;
  margin-left: 16px;
  width: 85%;
  @media (min-width: 769px) {
    margin-right: 1%;
    margin-left: 0;
    min-width: 365px;
    max-width: 365px;
  }
`;

export const Title = styled.div`
  background: #27ae60;
  border-radius: 5px 5px 0px 0px;
  padding: 22px;
  margin-top: 20px;

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: #ffffff;
  }
`;

export const List = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 158px;
  padding: 22px;

  h3 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    text-align: center;

    color: #333333;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    text-align: center;

    color: #828282;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 323px;
    overflow-x: auto;
    gap: 23px;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 21px;
  }

  h2 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: #333333;
  }

  span {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: #828282;
  }

  button {
    width: 100%;
    height: 60px;

    background: #e0e0e0;

    border: 2px solid #e0e0e0;
    border-radius: 8px;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #828282;
  }
`;
