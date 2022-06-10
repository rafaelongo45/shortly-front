import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";

function SignUp(){
  const [ userData, setUserData ] = useState({name: '', email: '', password: '', confirmPassword: ''});
  
  const navigate = useNavigate();

  function sendData(e){
    e.preventDefault();

    if (userData.password !== userData.confirmPassword){
      alert('As senhas são diferentes!');
      return;
    }

    const URL = 'http://localhost:4000/signup';

    const promise = axios.post(URL, userData);

    promise.then((response) => {
      alert('Usuário cadastrado com sucesso!');
      navigate('/signin');
    });

    promise.catch(err => {
      alert(err.response.data);
      console.log(err);
    });
  }

  return(
    <Main>
      <Form onSubmit={sendData}>
        <input type ='text' placeholder="Nome" required value={userData.name} onChange={e => setUserData({...userData, name: e.target.value})}></input>
        <input type ='email' placeholder="E-mail" required value={userData.email} onChange={e => setUserData({...userData, email: e.target.value})}></input>
        <input type ='password' placeholder="Senha" required value={userData.password} onChange={e => setUserData({...userData, password: e.target.value})}></input>
        <input type ='password' placeholder="Confirma senha" required value={userData.confirmPassword} onChange={e => setUserData({...userData, confirmPassword: e.target.value})}></input>
        <button type="submit">Criar Conta</button>
      </Form>
    </Main>
  )
};

export default SignUp;

const Main = styled.main`
  margin-top: 160px;
  width: 100%;
  display:flex;
  align-items:center;
  flex-direction:column;
`;

const Form = styled.form`
  display:flex;
  flex-direction:column;
  width: 90%;
  align-items:center;
  
  input{
    width: 100%;
    margin-bottom: 25px;
    border: 1px solid rgb(148, 187, 247);
    border-radius: 4px;
    height: 50px;
    padding-left:10px;
    box-shadow: 0px 4px 24px rgba(28, 132, 218, 0.18);
  }

  button {
    margin-top: 20px;
    border:none;
    width: 160px;
    height: 50px;
    border-radius: 8px;
    background-color: #0B3C89;
    color:white;
    font-size: 16px;
    font-weight: 700;
    :hover{
      cursor:pointer
    }
  }
`