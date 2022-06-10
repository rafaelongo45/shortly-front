import { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import UserContext from "../Contexts/UserContext";

function HeaderSignedIn(){
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);
  
  return (
    <Header>
      <Logo onClick={()=> navigate('/')}>
        <h1>Shortly</h1>
        <p>🩳</p>
      </Logo>

      <User>
        <h1>Seja bem-vindo(a), {userInfo.name}</h1>
      </User>

      <Settings>
        <h1 onClick={() => navigate('/myprofile')}>Home</h1>
        <h1 onClick={() => navigate('/')}>Ranking</h1>
        <h1 onClick={() => {navigate('/'); window.location.reload()}}>Sair</h1>
      </Settings>
    </Header>
  )
};

export default HeaderSignedIn

const Header = styled.header`
  display:flex;
  height: 100px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  align-items:center;
  justify-content:center;
`

const Logo = styled.div`
  display:flex;
  margin-top: 50px;
  align-items: center;

  :hover{
    cursor: pointer;
  }

  h1{
    font-size: 55px;
    margin-right: 10px;
  }

  p{
    font-size: 60px;
  }
`

const User = styled.div`
  position:absolute;
  top: 5px;
  left: 0;
  font-weight: 700;

  h1{
    font-size: 14px;
    color:rgb(0, 86, 216);
  }
`

const Settings = styled.section`
  display:flex;
  justify-content: space-between;
  width: 130px;
  position:absolute;
  top: 5px;
  right: 0;

  h1{
    font-size: 14px;
    color: grey;
    font-weight: 700;

    :hover{
      cursor:pointer
    }

    :last-child{
      text-decoration:underline;
    }
  }
`