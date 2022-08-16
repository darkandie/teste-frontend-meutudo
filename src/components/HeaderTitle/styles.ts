import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.colors.fontBlack};
  border-radius: 0 0 500px 0;
  position: relative;
  .icon {
    display: none;
  }
  h2 {
    color: ${({ theme }) => theme.colors.fontWhite};
    font-weight: 500;
    margin: 20px 0;
  }
  @media (max-width: 768px) {
    border-radius: 0 0 50px 0;
    .icon {
      display: block;
      position: absolute;
      left: 10px;
      bottom: 20px;
    }
  }
`;
