import styled from "styled-components";
import RenderHeader from "../Header/RenderHeader";
import SignUp from "./SignUp";

function RenderSignUp(){
  return (
    <SignUpPage>
      <RenderHeader />
      <SignUp />
    </SignUpPage>
  )
};

export default RenderSignUp;

const SignUpPage = styled.section`
  width: 90%;
  height: 100%;
  display:flex;
  position: relative;
  margin: 20px auto;
`