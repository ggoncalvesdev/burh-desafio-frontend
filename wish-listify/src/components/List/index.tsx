import { NavigateFunction, useNavigate } from "react-router-dom";
import { ListProps } from "../../model/ListProps";
import {
  Desire,
  Type,
  Card,
  ContainerDesire,
  DesireName,
  Button,
  Title,
} from "./styles";

export const List = ({ type, title, wishes }: ListProps) => {
  const maxDisplayedWishes = 5;
  const displayedWishes = wishes.slice(0, maxDisplayedWishes);
  const navigate: NavigateFunction = useNavigate()

  const handleCardClick = () => {
    navigate("Visualizar")
  };

  return (
    <Button onClick={handleCardClick}>
      <Card type={type}>
        <Title>{title}</Title>
        <Type>{type}</Type>
        <ContainerDesire>
          {displayedWishes.map((wish, index) => (
            <Desire key={index}>
              <DesireName>- {wish.name}</DesireName>
            </Desire>
          ))}
        </ContainerDesire>
      </Card>
    </Button>
  );
};
