import { AiOutlineRight, AiOutlineQuestionCircle } from "react-icons/ai";

import { emprestimo, logo_1 } from "../../assets";
import {
  Container,
  Options,
  Card,
  ImgBox,
  Img,
  CardContainer,
  TopCard,
  Desc,
  Tax,
  BottomCard,
  Confirm,
} from "./styles";

const ComponentEnd = () => {
  return (
    <Container>
      <Options>
        <h1>Escolha um banco.</h1>
        <CardContainer>
          <Card>
            <TopCard>
              <img src={logo_1} alt="" />
              <Desc>
                <h5>
                  <strong>60 parcelas de</strong>
                </h5>
                <h3>R$ 372,65</h3>
                <h5>Total de R$ 5.030,00</h5>
              </Desc>
              <Tax>
                <p>
                  com taxa de <br />
                  <strong>1,30% a.m</strong>
                </p>
              </Tax>
            </TopCard>
            <BottomCard>
              <p>
                Previsão de pagamento{" "}
                <AiOutlineQuestionCircle
                  size={20}
                  color="#D9299B"
                  className="icon"
                />
                <br />
                <strong>19 de maio de junho 2020</strong>
              </p>
              <Confirm>
                <h4>Contratar</h4>
                <AiOutlineRight color="#D9299B" size={20} />
              </Confirm>
            </BottomCard>
          </Card>
        </CardContainer>
      </Options>

      <ImgBox>
        <Img src={emprestimo} />
      </ImgBox>
    </Container>
  );
};

export default ComponentEnd;
