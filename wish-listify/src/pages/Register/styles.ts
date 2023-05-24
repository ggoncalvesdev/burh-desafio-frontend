import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Define a cor de fundo com transparência */
`;

export const Input = styled.input`
  height: 50px;
  width: 100%;

  border-radius: 10px;
  border: 2px solid #fff;

  padding-left: 20px;
  ::placeholder {
    color: black;
  }

  outline: none;

  &:hover {
    border-color: #fff;
  }
`

export const Button = styled.button`
  width: 300px;

  margin-top: 50px;
  padding-top: 15px;
  padding-bottom: 15px;

  border-radius: 20px;

  font-size: 20px;
  &:hover {
    color: #fff;
  }
  background-image: radial-gradient(
    circle at 120.71% 70%,
    #c9e2ff 0,
    #82adff 25%,
    #3c78f2 50%,
    #00469e 75%,
    #001b53 100%
  );
`