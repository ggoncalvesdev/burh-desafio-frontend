import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

import {
  Button,
  ButtonClose,
  ButtonPrazo,
  CardContainer,
  CreateButton,
  CreateButtonContainer,
  Input,
} from "./styles";
import { RegisterList, postList } from "../../services/api/Request/listService";
import { NavigateFunction, useNavigate } from "react-router";

export const Card = () => {
  const [newList, setNewList] = useState("");
  const [prazoSelecionado, setPrazoSelecionado] = useState("");
  const [wishList, setWishList] = useState([{ wish: "", description: "" }]);

  const storedEmail = localStorage.getId('email');

  const navigate: NavigateFunction = useNavigate()

  const handleInputChange = (e: any) => {
    setNewList(e.target.value);
  };

  const handleWishChange = (e: any, index: any) => {
    const newWishes = [...wishList];
    newWishes[index].wish = e.target.value;
    setWishList(newWishes);
  };

  const handleDescriptionChange = (e: any, index: any) => {
    const newWishes = [...wishList];
    newWishes[index].description = e.target.value;
    setWishList(newWishes);
  };

  const handleAddWish = () => {
    setWishList([...wishList, { wish: "", description: "" }]);
  };

  const handleRemoveWish = (index: any) => {
    const newWishes = [...wishList];
    newWishes.splice(index, 1);
    setWishList(newWishes);
  };
  const handleCreateList = () => {
    let data: RegisterList = {
      storedEmail: storedEmail,
      newList: newList,
      prazoSelecionado: prazoSelecionado,
      wishList: wishList,
    };
    postList(data)
      .then((res) => {
        alert("lista cadastrada com sucesso!");
        navigate("Home");
      })
      .catch((err) => {
        console.log(err);
        alert("Desculpe, parece que o servidor não está respondendo, porfavor tente mais tarde.");
      });
  };
  return (
    <>
      <CardContainer>
        <ButtonPrazo
          onClick={() => setPrazoSelecionado("curto prazo")}
          selecionado={prazoSelecionado === "curto prazo"}
          background="green-500"
        >
          Curto Prazo
        </ButtonPrazo>
        <ButtonPrazo
          onClick={() => setPrazoSelecionado("médio prazo")}
          selecionado={prazoSelecionado === "médio prazo"}
          background="yellow-500"
        >
          Médio Prazo
        </ButtonPrazo>
        <ButtonPrazo
          onClick={() => setPrazoSelecionado("longo prazo")}
          selecionado={prazoSelecionado === "longo prazo"}
          background="blue-500"
        >
          Longo Prazo
        </ButtonPrazo>
        <Input
          value={newList}
          onChange={handleInputChange}
          placeholder="Nome da Lista"
        />
        {wishList.map((wish, index) => (
          <div key={index} style={{ position: "relative" }}>
            <Input
              value={wish.wish}
              onChange={(e) => handleWishChange(e, index)}
              placeholder="Desejo"
            />
            <ButtonClose onClick={() => handleRemoveWish(index)}>
              <RiCloseLine />
            </ButtonClose>
            <Input
              value={wish.description}
              onChange={(e) => handleDescriptionChange(e, index)}
              placeholder="Descrição"
            />
          </div>
        ))}
        <Button onClick={handleAddWish}>adicionar Desejo</Button>
      </CardContainer>
      <CreateButtonContainer>
        <CreateButton onClick={handleCreateList}>Criar Lista</CreateButton>
      </CreateButtonContainer>
    </>
  );
};
