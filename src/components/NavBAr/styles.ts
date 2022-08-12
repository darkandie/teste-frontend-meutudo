import styled from "styled-components";

export const Header = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.fontBlack};
`;

export const Logo = styled.img`
  position: relative;
  max-width: 100px;
`;

export const Nav = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  .icon {
    margin-left: 15px;
    cursor: pointer;
  }
  li {
    list-style: none;
    a {
      display: inline-block;
      font-weight: 400;
      margin-left: 40px;
      text-decoration: none;
      color: ${(props) => props.theme.colors.fontWhite};
    }
  }
`;
