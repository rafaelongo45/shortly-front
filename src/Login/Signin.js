import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import UserContext from "../Contexts/UserContext";

function Signin(){
  const [ userData, setUserData ] = useState({email: '', password: ''})
  const { setUserInfo, userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  function sendData(e){
    e.preventDefault();

    const URL = 'http://localhost:4000/signin';

    const promise = axios.post(URL, userData);

    promise.then((response) => {
      setUserInfo({...userInfo, token: response.data.token, userId: response.data.userId, name: response.data.name});
      navigate('/');
    });

    promise.catch(err => {
      alert(err.response.data);
      console.log(err);
    });
  }

  return(
    <Main>
      <Form onSubmit={sendData}>
        <input type ='email' placeholder="E-mail" required value={userData.email} onChange={e => setUserData({...userData, email: e.target.value})}></input>
        <input type ='password' placeholder="Senha" required value={userData.password} onChange={e => setUserData({...userData, password: e.target.value})}></input>
        <button type="submit">Entrar</button>
      </Form>
    </Main>
  )
};

export default Signin;

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