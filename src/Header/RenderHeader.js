import { useContext } from "react";

import UserContext from "../Contexts/UserContext";
import HeaderNotSignedIn from "./HeaderNotSignedIn";
import HeaderSignedIn from "./HeaderSignedIn";

function RenderHeader(){  
  const { userInfo } = useContext(UserContext);

  return userInfo.token ? <HeaderSignedIn /> : <HeaderNotSignedIn />
};

export default RenderHeader;

