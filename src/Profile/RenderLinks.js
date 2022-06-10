import axios from 'axios';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa'

function ShortenedUrl({url, userInfo, setCount, count, num}){
  
  function deleteLink(e){
    e.preventDefault();

    const URL = `http://localhost:4000/urls/${url.id}`;
    const CONFIG = { headers: { 'Authorization': `Bearer ${userInfo.token}`}};
    const promise = axios.delete(URL, CONFIG);

    promise.then(num++, window.alert('Url deletada com sucesso'), setCount(num));

    promise.catch(err => err.response.data)
  };

  function goToUrl(e){
    e.preventDefault();

    const URL = `http://localhost:4000/urls/open/${url.shortUrl}`;
    const promise = axios.get(URL);

    promise.then(window.location.replace(url.url));

    promise.catch(err => err.response.data)
  };

  return (
    <Link>
      <UrlInfo  onClick={goToUrl}>
        <h1>{url.url}</h1> 
        <h1>{url.shortUrl}</h1> 
        <h1>Visitantes: {url.visitCount}</h1>
      </UrlInfo>
      <button onClick={deleteLink}> < FaTrash /> </button>
    </Link>
  )
}

export default ShortenedUrl;

const Link = styled.div`
  width: 90%;
  height: 70px;
  border-radius: 8px;
  padding: 0 15px;
  align-items:center;
  position:relative;
  font-size: 13px;
  color: white;
  margin-bottom: 30px;

  button{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 15%;
    background-color: white;
    border: 1px solid rgb(148, 187, 247);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    z-index: 1;
    font-size: 26px;
    color:red;
    display:flex;
    align-items:center;
    justify-content:center;
  }
`

const UrlInfo = styled.div`
  width: 86.5%;
  background-color: rgb(148, 187, 247);
  display: flex;
  justify-content:space-between;
  height: 70px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 0 15px;
  align-items:center;
  position:relative;
  font-size: 13px;
  color: white;
  margin-bottom: 30px;

  h1{
    width: 20%;
    overflow-x:hidden;
    overflow-y:hidden;
  }
`