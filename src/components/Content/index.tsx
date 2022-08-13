import creditCard from "../../assets/images/creditCard-2.png";
import image from "../../assets/images/emprestimo.png";
import newLoan from "../../assets/images/newLoan-2.png";
import portability from "../../assets/images/portability-2.png";
import refinancing from "../../assets/images/refinancing-2.png";
import { Container, Options, Card, ImgBox, Img, CardContainer } from "./styles";

const Content = () => {
  return (
    <Container>
      <Options>
        <h1>Oportunidades</h1>
        <CardContainer>
          <Card>
            <img src={newLoan} alt="" />
            <h4>
              Novo
              <br />
              Empréstimo
            </h4>
            <p>Até R$ 3.058,10</p>
          </Card>
          <Card>
            <img src={portability} alt="" />
            <h4>Portabilidade</h4>
            <p>Até R$ 2.000,00</p>
          </Card>
          <Card className="disabled">
            <img src={refinancing} alt="" />
            <h4>Refinanciamento</h4>
          </Card>
          <Card className="disabled">
            <img src={creditCard} alt="" />
            <h4>
              Cartão de Crédito
              <br />
              consignado
            </h4>
          </Card>
        </CardContainer>
      </Options>
      <ImgBox>
        <Img src={image} />
      </ImgBox>
    </Container>
  );
};

export default Content;
