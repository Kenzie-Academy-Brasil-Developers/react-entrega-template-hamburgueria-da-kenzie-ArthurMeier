import styled from "styled-components";

export const SytledItem = styled.li`
  box-sizing: border-box;
  width: 300px;
  height: 346px;
  left: 16px;
  top: 154px;
  background: #ffffff;

  border: 2px solid #e0e0e0;
  border-radius: 5px;

  h2 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: #333333;

    margin-top: 26.67px;
    margin-left: 21px;
  }

  span {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #828282;

    margin-left: 21px;
  }

  p {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: #27ae60;

    margin-left: 21px;
    margin-top: 14px;
  }

  button {
    width: 106px;
    height: 40px;
    left: 20px;
    top: 133px;

    background: #27ae60;

    border: 2px solid #27ae60;
    border-radius: 8px;

    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #ffffff;

    margin-left: 21px;
  }
`;
export const ImageContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 150px;
  background: #f5f5f5;
  border-radius: 5px;
  img {
    height: 150px;
  }
`;
