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

const ContentPeriod = () => {
  return (
    <Container>
      <Options>
        <h1>Em quanto tempo você quer pagar?</h1>
        <CardContainer>
          <Card>
            <h3>48 meses</h3>
          </Card>
          <Card>
            <h3>60 meses</h3>
          </Card>
          <Card>
            <h3>72 meses</h3>
          </Card>
          <Card>
            <h3>84 meses</h3>
          </Card>
        </CardContainer>
        <SimulateContainer>
          <Input>
            <input type="text" placeholder="00,00" />
            <h3>meses</h3>
          </Input>
          <Button>
            <button type="button">
              <h3>Continuar</h3>
            </button>
          </Button>
        </SimulateContainer>
      </Options>

      <ImgBox>
        <Img src={emprestimo} />
      </ImgBox>
    </Container>
  );
};

export default ContentPeriod;
