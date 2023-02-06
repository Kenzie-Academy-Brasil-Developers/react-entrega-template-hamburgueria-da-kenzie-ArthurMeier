import React from "react";
import Logo from "../../assets/Logo.svg";
import { StyledHeader } from "./Style";

export const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt="Logo Kenzie Burguer" />

      <div>
        <input type="text" placeholder="Digitar Pesquisa" />

        <button>Pesquisar</button>
      </div>
    </StyledHeader>
  );
};
