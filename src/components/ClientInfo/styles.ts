import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  background: ${(props) => props.theme.colors.fontBlack};
  border-radius: 0 0 560px 0;
  h3 {
    color: ${(props) => props.theme.colors.fontWhite};
    margin-top: 10px;
  }
  h4 {
    color: ${(props) => props.theme.colors.fontWhite};
    font-weight: 200;
  }
  h2 {
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.primary};
  }
`;