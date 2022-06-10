import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RenderHome from '../home/RenderHome';
import RenderSignin from '../Login/RenderSignin';
import RenderSignUp from '../Signup/RenderSignUp';
import RenderProfile from '../Profile/RenderProfile';
import UserContext from '../Contexts/UserContext';

function App(){
  const [ userInfo, setUserInfo ] = useState( {token: '', name: ''} );

  return (
    <BrowserRouter>
      <UserContext.Provider value={ { userInfo, setUserInfo } }>
        <Routes>
          <Route path='/' element={<RenderHome />}/>
          <Route path='/signup' element ={<RenderSignUp />} />
          <Route path='/signin' element ={<RenderSignin />} />
          <Route path='/myprofile' element ={<RenderProfile />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App;