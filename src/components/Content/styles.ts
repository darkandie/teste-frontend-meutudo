import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export const Options = styled.div`
  padding: 100px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  margin-top: 30px;
  gap: 40px;
  width: 100%;
  justify-content: space-around;
`;

export const Card = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ theme }) => theme.colors.disabled};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  gap: 10px;
  &.disabled {
    cursor: context-menu;
    img,
    h4 {
      opacity: 0.2;
    }
  }
  img {
    width: 80px;
  }
  p {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ImgBox = styled.div``;

export const Img = styled.img`
  width: 90%;
`;
