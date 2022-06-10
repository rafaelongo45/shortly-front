import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

function HeaderNotSignedIn(){
  const navigate = useNavigate();
  
  return (
    <Header>
      <Logo onClick={()=> navigate('/')}>
        <h1>Shortly</h1>
        <p>🩳</p>
      </Logo>

      <Registration>
        <h1 onClick={() => navigate('/signin')}>Entrar</h1>
        <h1 onClick={() => navigate('/signup')}>Cadastrar-se</h1>
      </Registration>
    </Header>
  )
};

export default HeaderNotSignedIn

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

const Registration = styled.section`
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
  }

  h1:first-child{
    color: #1C84DA;
    :hover{
      cursor:pointer
    }
  }
`