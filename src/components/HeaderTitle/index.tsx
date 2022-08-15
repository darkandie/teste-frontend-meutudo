import { Container } from "./styles";

type PropType = {
  name: string;
};

const HeaderTitle = ({ name }: PropType) => {
  return (
    <Container>
      <h2>{name}</h2>
    </Container>
  );
};

export default HeaderTitle;
