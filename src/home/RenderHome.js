import styled from "styled-components";

import RenderHeader from "../Header/RenderHeader";
import Ranking from "./Ranking";

function RenderHome(){
  return (
    <Home>
      <RenderHeader />
      <Ranking />
    </Home>
  )
}

export default RenderHome;

const Home = styled.section`
  width: 90%;
  height: 100%;
  display:flex;
  position: relative;
  margin: 20px auto;
`