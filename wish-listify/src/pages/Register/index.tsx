import { ChangeEvent, useState } from "react";
import {
  RegisterUser,
  postUser,
} from "../../services/api/Request/registoService";
import { Button, Input, StyledWrapper } from "./styles";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        console.log(err);
      });
  }
  
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
