import { useContext } from "react";

import UserContext from "../Contexts/UserContext";
import HeaderNotSignedIn from "./HeaderNotSignedIn";
import HeaderSignedIn from "./HeaderSignedIn";

function RenderHeader(){  
  const { userInfo } = useContext(UserContext);
  console.log(userInfo)

  return userInfo.token ? <HeaderSignedIn /> : <HeaderNotSignedIn />
};

export default RenderHeader;

