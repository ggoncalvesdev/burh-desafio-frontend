import { ChangeEvent, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import CryptoJS from 'crypto-js'
import { Button, EyeIcon, Input, InputWrapper, StyledWrapper } from "./styles";
const encryptionKey = 'minha-chave-secreta'

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const navigate: NavigateFunction = useNavigate()

  function handleLogin() {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
  
    if (email === storedEmail && storedPassword !== null && decryptPassword(storedPassword) === password) {
      alert('Login bem-sucedido');
      navigate("Home")
    } else {
      alert('Email ou senha inválidos');
    }
  }

  function decryptPassword(encryptedPassword: string) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedPassword, encryptionKey);
    const decryptedPassword = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedPassword;
  }



/*   useEffect(() => {

    if (storedEmail && storedPassword) {
      setEmail(storedEmail)
      const decryptedPassword = CryptoJS.AES.decrypt(
        storedPassword,
        encryptionKey,
      ).toString(CryptoJS.enc.Utf8)
      setPassword(decryptedPassword)
    }
  }, []) */

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
  }
  
  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    const enteredPassword = event.target.value;
    setPassword(enteredPassword);
  }

  return (
    <StyledWrapper>
      <InputWrapper>
        <Input
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <Input
          value={password}
          placeholder="Senha"
          type={hidePass ? "password" : "text"}
          onChange={handlePasswordChange}
        />
        {hidePass ? (
          <EyeIcon style={{ right: '15%', top: '78%' }}>
            <AiFillEye
              onClick={() => setHidePass(!hidePass)}
              color="#00469e"
              size={25}
            />
          </EyeIcon>
        ) : (
          <EyeIcon style={{ right: '15%', top: '78%' }}>
            <AiFillEyeInvisible
              onClick={() => setHidePass(!hidePass)}
              color="#00469e"
              size={25}
            />
          </EyeIcon>
        )}
      </InputWrapper>
      <Button onClick={() => handleLogin()}>Entrar</Button>
    </StyledWrapper>
  );
};
