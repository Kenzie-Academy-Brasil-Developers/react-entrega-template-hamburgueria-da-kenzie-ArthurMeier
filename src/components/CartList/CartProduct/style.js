import styled from "styled-components";

export const ProductCart = styled.li`
  display: flex;
  img {
    height: 80px;
    width: 80px;
    background-color: #e0e0e0;
  }
  div {
    display: flex;
    flex-direction: column;
    margin: 0;
    justify-content: flex-start;
  }

  h2 {
    margin-left: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: #333333;
  }

  span {
    margin-top: 10px;
    margin-left: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #828282;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    color: #bdbdbd;
  }
`;
