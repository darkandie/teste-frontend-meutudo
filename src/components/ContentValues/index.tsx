import { useNavigate } from "react-router-dom";

import { emprestimo } from "../../assets";
import { useGetValuesQuery } from "../../services/api";
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
  const navigate = useNavigate();
  const { data, isLoading } = useGetValuesQuery();

  if (isLoading) return <h1>...Carregando</h1>;

  const handleValue = (value?: number) => {
    navigate("/period", { state: { value } });
  };

  return (
    <Container>
      <Options>
        <h1>De quanto você precisa?</h1>
        <CardContainer>
          <Card onClick={() => handleValue(data?.suggestionValues[3])}>
            <h3>{`R$ ${data?.suggestionValues[3]}`}</h3>
          </Card>
          <Card onClick={() => handleValue(data?.suggestionValues[2])}>
            <h3>{`R$ ${data?.suggestionValues[2]}`}</h3>
          </Card>
          <Card onClick={() => handleValue(data?.suggestionValues[1])}>
            <h3>{`R$ ${data?.suggestionValues[1]}`}</h3>
          </Card>
          <Card onClick={() => handleValue(data?.suggestionValues[0])}>
            <h3>{`R$ ${data?.suggestionValues[0]}`}</h3>
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
