import axios from "axios";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from "react";

import UserContext from "../Contexts/UserContext";
import ShortenedUrl from "./RenderLinks";

function ProfilePage(){
  const [ link, setLink ] = useState({url: ''})
  const [ userData, setUserData ] = useState({shortenedUrls: [{id: ''}]})
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [count, setCount] = useState(0);

  let num = userData.shortenedUrls.length;

  useEffect(() => {
    const URL = `https://shortly-b.herokuapp.com/users/${userInfo.userId}`;
    const CONFIG = { headers: { 'Authorization': `Bearer ${userInfo.token}` }};
    const promise = axios.get(URL,CONFIG);
    
    promise.then(response => {
      setUserData(response.data);
      setCount(num);
    });

    promise.catch(err => console.log(err.response.data))
  }, [count])

  function createLink(e){
    e.preventDefault();

    const URL = 'https://shortly-b.herokuapp.com/urls/shorten';
    const CONFIG = { headers: { 'Authorization': `Bearer ${userInfo.token}` }};
    const promise = axios.post(URL, link, CONFIG);

    promise.then((response) => {
      num++
      console.log(response.data);
      setCount(num)
    });

    promise.catch(err => {
      alert(err.response.data);
      console.log(err);
    });
  };

  return(
    <Main>
      <Form onSubmit={createLink}>
        <input type ='text' placeholder="Link que cabe no bolso" required value={link.url} onChange={e => setLink({url: e.target.value})}></input>
        <button type="submit">Encurtar</button>
      </Form>
      {
        count !== -1 ?
        userData.shortenedUrls.map(url => {
          return <ShortenedUrl url = {url} userInfo ={userInfo} setCount = {setCount} count={count}num ={num}/>
        })
        : 
        ''
      }
    </Main>
  )
};

export default ProfilePage;

const Main = styled.main`
  margin-top: 180px;
  width: 100%;
  display:flex;
  align-items:center;
  flex-direction:column;
`;

const Form = styled.form`
  display:flex;
  width: 90%;
  margin-bottom: 30px;
  
  input{
    width: 90%;
    margin-right: 20px;
    border: 1px solid rgb(148, 187, 247);
    border-radius: 4px;
    height: 50px;
    padding-left:10px;
    box-shadow: 0px 4px 24px rgba(28, 132, 218, 0.18);
  }

  button {
    border:none;
    width: 90px;
    height: 50px;
    border-radius: 8px;
    background-color: #0B3C89;
    color:white;
    font-size: 12px;
    font-weight: 700;
    
    :hover{
      cursor:pointer
    }
  }
`