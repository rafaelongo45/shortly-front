import styled from "styled-components";

import ProfilePage from "./ProfilePage";
import RenderHeader from "../Header/RenderHeader";

function RenderProfile(){
  return (
    <Profilepage>
      <RenderHeader />
      <ProfilePage />
    </Profilepage>
  )
}

export default RenderProfile;

const Profilepage = styled.section`
  width: 90%;
  height: 100%;
  display:flex;
  position: relative;
  margin: 20px auto;
`