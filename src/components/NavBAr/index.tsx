import React from "react";
import { AiOutlineBell } from "react-icons/ai";

import logo from "../../assets/images/tudo-logo-2.png";
import { Header, Logo, Nav } from "./styles";

const NavBar = () => {
  return (
    <Header>
      <Logo src={logo} />
      <Nav>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/">Contratos</a>
        </li>
        <li>
          <a href="/">Dúvidas</a>
        </li>
        <li>
          <a href="/">Conta</a>
        </li>
        <AiOutlineBell size={32} color="#fff" className="icon" />
      </Nav>
    </Header>
  );
};

export default NavBar;
