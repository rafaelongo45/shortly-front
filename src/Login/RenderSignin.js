import styled from "styled-components";
import RenderHeader from "../Header/RenderHeader";
import Signin from "./Signin";

function RenderSignin(){
  return (
    <SigninPage>
      <RenderHeader />
      <Signin />
    </SigninPage>
  )
};

export default RenderSignin;

const SigninPage = styled.section`
  width: 90%;
  height: 100%;
  display:flex;
  position: relative;
  margin: 20px auto;
`