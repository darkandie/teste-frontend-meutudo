import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  background: ${({ theme }) => theme.colors.fontBlack};
  border-radius: 0 0 500px 0;
  h3 {
    color: ${({ theme }) => theme.colors.fontWhite};
    margin-top: 10px;
  }
  h4 {
    color: ${({ theme }) => theme.colors.fontWhite};
    font-weight: 200;
  }
  h2 {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 768px) {
    border-radius: 0 0 40px 0;
  }
`;
