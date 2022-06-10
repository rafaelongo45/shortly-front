import styled from 'styled-components';

function RenderRanking({id, name, linksCount, visitCount, ranking}){
  let position = 0;

  for(let i = 0; i < ranking.length; i++){
    if(ranking[i].id === id && ranking[i].linksCount === linksCount && ranking[i].visitCount === visitCount){
      position = i + 1;
    }
  }

  return (
    <User>
      <h1>{position}. {name} - {linksCount} Links - {visitCount} visualizações</h1>
    </User>
  )
 
}

export default RenderRanking;

const User = styled.div`
  width: 100%;
  margin: 10px;
`