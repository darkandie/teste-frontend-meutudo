import { emprestimo } from "../../assets";
import {
  Container,
  Options,
  Card,
  ImgBox,
  Img,
  CardContainer,
  SimulateContainer,
  Input,
  Button,
} from "./styles";

const ContentValues = () => {
  return (
    <Container>
      <Options>
        <h1>De quanto você precisa?</h1>
        <CardContainer>
          <Card>
            <h3>R$ 300,00</h3>
          </Card>
          <Card>
            <h3>R$ 2.660,00</h3>
          </Card>
          <Card>
            <h3>R$ 5.030,00</h3>
          </Card>
          <Card>
            <h3>R$ 7.407,93</h3>
          </Card>
        </CardContainer>
        <SimulateContainer>
          <Input>
            <h3>Outro valor</h3>
            <input type="text" placeholder="R$ 00,00" />
          </Input>
          <Button>
            <button type="button">
              <h3>Continuar</h3>
            </button>
            <h4>Simule pela parcela</h4>
          </Button>
        </SimulateContainer>
      </Options>

      <ImgBox>
        <Img src={emprestimo} />
      </ImgBox>
    </Container>
  );
};

export default ContentValues;
