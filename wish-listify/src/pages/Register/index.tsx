import { ChangeEvent, useEffect, useState } from "react";
import { Api } from "../../services/api/Api";
import {
  RegisterUser,
  postUser,
} from "../../services/api/Request/registoService";
import { Button, Input, StyledWrapper } from "./styles";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [listWish, setListWish] = useState([]);

  function handleCreate() {
    let data: RegisterUser = {
      name: name,
      email: email,
      password: password,
    };
    postUser(data)
      .then((res) => {
        alert("você foi cadastrado com sucesso!");
        /*           navigation.navigate("Home"); */
      })
      .catch((err) => {
        alert(" Este e-mail já está em uso, verique-o ou recupere sua senha");
        console.log(err);
      });
  }

  useEffect(() => {
    loadList();
  }, []);

  const loadList = async () => {
    try {
      await Api.post("/list", {
        name: name,
        email: email,
        password: password,
      }).then((resp) => {
        setListWish(resp.data);
      });
    } catch (e) {
      console.error("Erro ao recuperar os dados do servidor.", e);
      alert(
        "Erro ao recuperar os dados do servidor, por favor, tente mais tarde."
      );
    }
  };

  return (
    <StyledWrapper>
      <Input
        placeholder="Nome"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
      />
      <Input
        placeholder="Email"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setEmail(event.target.value);
        }}
      />
      <Input
        placeholder="Senha"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setPassword(event.target.value);
        }}
      />
      <Button onClick={() => handleCreate()}>Cadastrar</Button>
      </StyledWrapper>
  );
};
