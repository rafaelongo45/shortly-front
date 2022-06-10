import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import RenderRanking from "./RenderRanking";

function Ranking(){
  const [ ranking, setRanking ] = useState([''])

  const URL = 'http://localhost:4000/ranking';

  useEffect(() => {
    const promise = axios.get(URL);

    promise.then(response =>{
      setRanking(response.data)
    });

    promise.catch(err =>{
      console.log('Houve um erro ao pegar o ranking!')
    })
  }, []);
  
  return(
    <Main>
      <Title>
        <p>🏆</p>
        <h1>Ranking</h1>
      </Title>
      <RankingUsers>
        {
          ranking.map( ({id, name, linksCount, visitCount}) => {
            return <RenderRanking id = {id} name = {name} linksCount = {linksCount} visitCount ={visitCount} ranking = {ranking}/>
          })
        }
      </RankingUsers>
      <Footer>
        <h1>Crie sua conta para usar nosso serviço!</h1>
      </Footer>
    </Main>
  )
}

export default Ranking;

const Main = styled.main`
  margin-top: 145px;
  width: 100%;
  display:flex;
  align-items:center;
  flex-direction:column;
`

const Title = styled.header`
  display:flex;
  align-items: center;
  margin-bottom: 25px;

  p{
    font-size: 30px;
  }

  h1{
    font-size: 28px;
    font-weight: 700;
  }
`

const RankingUsers = styled.section`
  width: 90%;
  height: fit-content;
  margin-bottom: 60px;
  border-radius: 8px;
  border: 1px solid rgb(148, 187, 247);
  background-color: white;
  margin-top: 20px;
  padding: 10px 10px;
`

const Footer = styled.footer`
  text-align:center;
  width: 90%;

  h1{
    font-weight: 700;
    font-size: 22px;
  }
`