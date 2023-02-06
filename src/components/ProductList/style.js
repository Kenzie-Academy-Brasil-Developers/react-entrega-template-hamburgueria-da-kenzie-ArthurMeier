import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 20px;
  margin: 15px 0 20px 16px;
  overflow-y: auto;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 500px;
    max-width: 1000px;
  }
`;
