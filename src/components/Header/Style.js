import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 139px;

  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 14.28px;
    margin-bottom: 13.9px;
    width: 158.94px;
    height: 36.83px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 15px;

    width: 85%;
    height: 60px;

    margin-left: 16px;

    background: #ffffff;

    border: 2px solid #e0e0e0;
    border-radius: 8px;
  }

  input {
    width: 160px;
    border: none;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  button {
    padding: 0px 20px;
    width: 107px;
    height: 40px;

    background: #27ae60;

    border: 2px solid #27ae60;
    border-radius: 8px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: #ffffff;
    cursor: pointer;
  }

  @media (min-width: 769px) {
    height: 80px;
    flex-direction: row;
    justify-content: space-between;

    img {
      margin-left: 109px;
    }

    div {
      width: 365px;
      height: 60px;
      margin-right: 109px;
    }
  }
`;
