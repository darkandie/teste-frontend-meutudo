import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  animation-name: container;
  animation-duration: 1s;
  @keyframes container {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Options = styled.div`
  padding: 100px;
  @media (max-width: 768px) {
    padding: 0;
    h1 {
      margin: 30px 0 0 10px;
      font-size: 15px;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  margin-top: 30px;
  gap: 40px;
  width: 100%;
  justify-content: space-around;
  @media (max-width: 768px) {
    justify-content: center;
    gap: 20px;
    width: 100%;
  }
`;

export const Card = styled.div`
  text-align: center;
  width: 220px;
  height: 80px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ theme }) => theme.colors.disabled};
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  gap: 10px;
  h3 {
    font-weight: 500;
  }
  @media (max-width: 768px) {
    width: 160px;
    height: 60px;
  }
`;

export const ImgBox = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 90%;
`;

export const SimulateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.div`
  display: flex;
  margin: 50px 0;
  h3 {
    margin: 0 10px;
  }
  input {
    border: none;
    border-bottom: 1px solid #000;
    background: none;
    text-align: center;
    padding: 5px 0;
    &::placeholder {
      color: #000;
      font-size: 20px;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  button {
    padding: 15px 60px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.fontWhite};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50px;
    cursor: pointer;
    margin-bottom: 20px;
    letter-spacing: 2px;
    &:hover {
      background: ${({ theme }) => theme.colors.fontWhite};
      color: ${({ theme }) => theme.colors.primary};
      border: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
  h4 {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    cursor: pointer;
  }
`;
