import { emprestimo } from "../../assets";
import { useGetPeriodsQuery } from "../../services/api";
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
  const { data, isLoading } = useGetPeriodsQuery();

  if (isLoading) return <h1>...Carregando</h1>;

  return (
    <Container>
      <Options>
        <h1>Em quanto tempo você quer pagar?</h1>
        <CardContainer>
          <Card>
            <h3>{`${data?.suggestionInstallments[3]} meses`}</h3>
          </Card>
          <Card>
            <h3>{`${data?.suggestionInstallments[2]} meses`}</h3>
          </Card>
          <Card>
            <h3>{`${data?.suggestionInstallments[1]} meses`}</h3>
          </Card>
          <Card>
            <h3>{`${data?.suggestionInstallments[0]} meses`}</h3>
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
