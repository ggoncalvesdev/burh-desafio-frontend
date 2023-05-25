import styled, { DefaultTheme } from "styled-components";

export const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`
const typeColors: { [key: string]: keyof DefaultTheme } = {
  'Curto Prazo': 'green-700',
  'Médio Prazo': 'yellow-500',
  'Longo Prazo': 'blue-500',
};
export const Card = styled.div<{ type: keyof typeof typeColors }>`
  background-color: ${(props) => props.theme[typeColors[props.type]]};
  border: none;
  border-radius: 8px;
  height: 40vh;
  width: 30vh;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }

  @media (max-width: 510px) {
    height: 40vh;
    width: 26vh;
    justify-self: center;
  }
  
  @media (max-width: 320px) {
    justify-self: center;
  }
`
export const Title = styled.h2`
  color: ${(props) => props.theme.white};
  text-align: center;
  padding-top: 12px;
`

export const Type = styled.p`
  color: ${(props) => props.theme.white};
  text-align: center;
  padding-top: 5px;
  margin-bottom: 20px;
`
export const ContainerDesire = styled.ul`
  max-height: 70%;
  overflow-y: auto;
`
export const Desire = styled.li`
  color: ${(props) => props.theme.white};
  padding-top: 10px;
  padding-left: 10px;
  font-size: 17px;
  text-align: start;
`
export const DesireName = styled.li`
  color: ${(props) => props.theme.white};
  padding-top: 10px;
  padding-left: 10px;
  font-size: 17px;
`