import { ChangeEvent, useState } from "react";
import {
  RegisterUser,
  postUser,
} from "../../services/api/Request/registoService";
import { NavigateFunction, useNavigate } from 'react-router-dom'
import CryptoJS from 'crypto-js'


import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Button, EyeIcon, Input, InputWrapper, StyledWrapper } from "./styles";
const encryptionKey = 'minha-chave-secreta'

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validPass, setValidPass] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const navigate: NavigateFunction = useNavigate()

  function handleCreate() {
    let data: RegisterUser = {
      name: name,
      email: email,
      password: password,
    };
    if (password === validPass) {
      postUser(data)
        .then((res) => {
          alert("você foi cadastrado com sucesso!");
          navigate("Login");
          localStorage.setItem('email', email)
          localStorage.setItem('name', name)
          localStorage.setItem(
            'password',
            CryptoJS.AES.encrypt(password, encryptionKey).toString(),
          )
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("As senhas não coincidem");
    }
  }

  return (
    <StyledWrapper>
      <InputWrapper>
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
          type={hidePass ? "password" : "text"}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
          }}
        />
        {hidePass ? (
          <EyeIcon>
            <AiFillEye
              onClick={() => setHidePass(!hidePass)}
              color="#00469e"
              size={25}
            />
          </EyeIcon>
        ) : (
          <EyeIcon>
            <AiFillEyeInvisible
              onClick={() => setHidePass(!hidePass)}
              color="#00469e"
              size={25}
            />
          </EyeIcon>
        )}
        <Input
          placeholder="Validar senha"
          type={"password"}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setValidPass(event.target.value);
          }}
        />
      </InputWrapper>
      <Button onClick={() => handleCreate()}>Cadastrar</Button>
    </StyledWrapper>
  );
};
