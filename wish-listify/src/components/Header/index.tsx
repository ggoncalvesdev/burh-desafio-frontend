import { useState } from "react";
import { SlBookOpen } from "react-icons/sl";
import {
  GridContainer,
  HamburguerButton,
  HamburguerMenu,
  HeaderContainer,
  LogoLink,
  NavLink,
} from "./styles";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleHamburguer() {
    setMenuIsOpen((prevState) => !prevState);
  }

  const categories = [
    "Criar",
    "Visualizar",
    "Compartilhar",
    "Pesquisar",
  ];
  return (
    <HeaderContainer>
      <HamburguerButton aria-label="Abrir menu" onClick={handleHamburguer}>
        <HamburguerMenu open={menuIsOpen} />
      </HamburguerButton>

      <LogoLink href="/Home">
        <SlBookOpen size={20} color={"#fff"} />
      </LogoLink>
      <GridContainer open={menuIsOpen}>
        {categories.map((item, index) => (
          <li key={item}>
            <NavLink
              href={item}
              open={menuIsOpen}
              total={categories.length}
              index={index}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </GridContainer>
    </HeaderContainer>
  );
}
