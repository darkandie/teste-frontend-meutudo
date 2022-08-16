import { AiOutlineLeft } from "react-icons/ai";

import { Container } from "./styles";

type PropType = {
  name: string;
};

const HeaderTitle = ({ name }: PropType) => {
  return (
    <Container>
      <AiOutlineLeft color="white" size={32} className="icon" />
      <h2>{name}</h2>
    </Container>
  );
};

export default HeaderTitle;
