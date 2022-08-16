import {
  AiOutlineBell,
  AiOutlineCopy,
  AiOutlineQuestionCircle,
  AiOutlineUser,
  AiOutlineHome,
} from "react-icons/ai";

import { logo } from "../../assets";
import { Header, Logo, Nav } from "./styles";

const NavBar = () => {
  return (
    <Header>
      <Logo src={logo} />
      <Nav>
        <li>
          <AiOutlineHome className="icon" size={22} />
          <p>Inicio</p>
        </li>
        <li>
          <AiOutlineCopy className="icon" size={22} />
          <p>Contratos</p>
        </li>
        <li>
          <AiOutlineQuestionCircle className="icon" size={22} />
          <p>Dúvidas</p>
        </li>
        <li>
          <AiOutlineUser className="icon" size={22} />
          <p>Conta</p>
        </li>
      </Nav>
      <AiOutlineBell size={32} color="#fff" className="iconNav" />
    </Header>
  );
};

export default NavBar;
