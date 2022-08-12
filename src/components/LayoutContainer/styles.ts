import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: relative;
  width: 1500px;
  height: 100vh;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
  background: ${(props) => props.theme.colors.background};
`;
