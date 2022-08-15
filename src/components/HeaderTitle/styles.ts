import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.colors.fontBlack};
  border-radius: 0 0 500px 0;
  h2 {
    color: ${({ theme }) => theme.colors.fontWhite};
    font-weight: 500;
    margin: 20px 0;
  }
`;
