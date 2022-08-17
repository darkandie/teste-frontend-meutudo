import { Link } from "react-router-dom";

import {
  credit,
  emprestimo,
  newloan,
  portability,
  refinancing,
} from "../../assets";
import { useGetOportunitiesQuery } from "../../services/api";
import { Container, Options, Card, ImgBox, Img, CardContainer } from "./styles";

const Content = () => {
  const { data, isLoading } = useGetOportunitiesQuery();

  if (isLoading) return <h1>...Carregando</h1>;

  return (
    <Container>
      <Options>
        <h1>Oportunidades</h1>
        <CardContainer>
          <Card>
            <Link to="/values">
              <img src={newloan} alt="" />
              <h4>
                Novo
                <br />
                Empréstimo
              </h4>
              <p>{`Até R$ ${data?.newLoanMaxValue}`}</p>
            </Link>
          </Card>
          <Card>
            <Link to="/values">
              <img src={portability} alt="" />
              <h4>Portabilidade</h4>
              <p>{`Até R$ ${data?.portabilityMaxValue}`}</p>
            </Link>
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
