import styled, { DefaultTheme } from "styled-components";

interface ButtonPrazoProps {
  selecionado: boolean;
  background: keyof DefaultTheme['colors'];
}

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  max-width: 50%;
  padding: 16px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  border-radius: 8px;
`;

export const ButtonPrazo = styled.button<ButtonPrazoProps>`
  background-color: ${(props) =>
    props.selecionado ? props.theme.colors[props.background] : "transparent"};
  color: ${(props) => (props.selecionado ? props.theme.white : props.theme.black)};
  font-size: 14px;
  padding: 8px 16px;
  margin-right: 8px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.white};
  padding: 8px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme["purple-500"]};
  color: ${(props) => props.theme.white};
  font-size: 14px;
  padding: 8px 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 26%;
  right: 8px;
  transform: translateY(-50%);
  margin-left: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const CreateButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const CreateButton = styled.button`
  background-color: ${(props) => props.theme["purple-500"]};
  color: ${(props) => props.theme.white};
  font-size: 18px;
  padding: 18px 66px;
  border-radius: 8px;
  border: none;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.1s ease;
  }
`;