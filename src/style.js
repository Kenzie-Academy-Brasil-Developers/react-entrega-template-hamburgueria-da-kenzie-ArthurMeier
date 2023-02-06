import styled from "styled-components";

export const Body = styled.div`
  box-sizing: border-box;
  section {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 769px) {
    section {
      flex-direction: row;
    }
  }
  @media (min-width: 1440px) {
    section {
      justify-content: center;
    }
  }
`;
