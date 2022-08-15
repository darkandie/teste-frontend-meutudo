import {
  credit,
  emprestimo,
  newloan,
  portability,
  refinancing,
} from "../../assets";
import { Container, Options, Card, ImgBox, Img, CardContainer } from "./styles";

const Content = () => {
  return (
    <Container>
      <Options>
        <h1>Oportunidades</h1>
        <CardContainer>
          <Card>
            <img src={newloan} alt="" />
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
            <img src={credit} alt="" />
            <h4>
              Cartão de Crédito
              <br />
              consignado
            </h4>
          </Card>
        </CardContainer>
      </Options>
      <ImgBox>
        <Img src={emprestimo} />
      </ImgBox>
    </Container>
  );
};

export default Content;
