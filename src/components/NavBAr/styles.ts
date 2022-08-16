import styled from "styled-components";

export const Header = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.fontBlack};
  @media (max-width: 768px) {
    width: 100%;
    box-shadow: none;
    .iconNav {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  max-width: 100px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  li {
    list-style: none;
    display: flex;
    align-items: center;
    margin-left: 20px;
    p {
      margin-left: 5px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.fontWhite};
    }
    .icon {
      color: white;
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.fontWhite};
    li {
      width: 100%;
      margin-left: 0;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      p {
        color: ${({ theme }) => theme.colors.fontBlack};
        font-size: 12px;
        margin-bottom: 10px;
      }
      .icon {
        margin-left: 5px;
        color: ${({ theme }) => theme.colors.fontBlack};
      }
    }
  }
`;
