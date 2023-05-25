import styled from "styled-components";

interface CommonProps {
  open: boolean;
}

interface NavProps {
  open: boolean;
  index: number;
  total: number;
}

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  font-size: 0.65rem;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid rgba(255, 255, 255, 0.18);

  //Glassmorphism effect
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
  background: rgba(22, 22, 23, 0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;
export const HamburguerButton = styled.button`
  position: absolute;
  right: 14px;
  top: 10px;
  height: 20px;
  width: fit-content;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;

  &:focus-visible {
    background-color: rgba(255, 255, 255, 0.18);
  }
`;
export const HamburguerMenu = styled.div<CommonProps>`
  display: none;
  position: relative;
  z-index: 9999;
  height: 1px;
  width: 24px;
  background-color: ${(props) =>
    props.open ? props.theme["gray-900"] : props.theme.white};

  @media screen and (max-width: 768px) {
    display: block;
    transition: transform 0.25s ease-in-out;
    transform: ${(props) => (props.open ? "rotate(90deg)" : "none")};
  }

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.white};
    border-radius: 3px;
    transition: transform 0.5s ease-in-out, top 0.5s ease-in-out;
  }
  &::before {
    top: ${(props) => (props.open ? "0px" : "7px")};
    transform: ${(props) => (props.open ? "rotate(45deg)" : "none")};
  }

  &::after {
    top: ${(props) => (props.open ? "0px" : "-7px")};
    transform: ${(props) => (props.open ? "rotate(-45deg)" : "none")};
  }

  &:focus-visible {
    background-color: rgba(255, 255, 255, 0.18);
    border-radius: 6px;
  }
`;

export const GridContainer = styled.ul<CommonProps>`
  display: flex;
  list-style: none;
  width: fit-content;
  gap: 1.25rem;

  @media screen and (max-width: 768px) {
    max-height: ${(props) => (props.open ? "fit-content" : "290px")};
    margin-top: ${(props) => (props.open ? "0rem" : "-268px")};
    margin-bottom: 32px;
    transition: all 0.3s ease-in;

    align-items: center;
    justify-items: center;
    flex-direction: column;
    padding-top: 24px;
    gap: 24px;
  }
`;

export const NavLink = styled.a<NavProps>`
  font-size: 0.75rem;
  align-self: center;
  padding: 1px 4px;
  justify-self: center;
  text-decoration: none;
  color: ${(props) => props.theme.white};

  &:focus-visible {
    background-color: rgba(255, 255, 255, 0.18);
    border-radius: 6px;
  }

  animation: ${(props) => (props.open ? "showColorTransition" : "none")} 0.3s
    ease-in forwards;
  animation-delay: ${(props) => props.index * 80}ms;

  @keyframes showColorTransition {
    0% {
      color: rgba(0, 0, 0, 0);
    }
    100% {
      color: ${(props) => props.theme.white};
    }
  }
  @media screen and (max-width: 768px) {
    color: rgba(0, 0, 0, 0);
  }
`;

export const LogoLink = styled.a`
  color: ${(props) => props.theme.white};
  position: relative;
  top: 2px;
  margin-right: 20px;

  &:focus-visible {
    background-color: rgba(255, 255, 255, 0.18);
    border-radius: 6px;
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    left: 24px;
    top: 12px;
  }
`;
