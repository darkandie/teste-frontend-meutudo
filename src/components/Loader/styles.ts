import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  h1 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
