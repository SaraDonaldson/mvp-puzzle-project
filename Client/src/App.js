
import './App.css';
import React, { useState } from "react";
import LocalStorage from "./API/LocalStorage";
import { AppRouter } from './Navigation/Router';
import userAPI from "./API/loginAPI";
import ProtectedRoute from "./API/ProtectedRoute";
import NavBar from './Components/NavBar';


function App() {
  let [user, setUser] = useState(LocalStorage.getUser());
  const [loginErrorMsg, setLoginErrorMsg] = useState("");
  const [registrationErrorMsg, setRegistrationErrorMsg] = useState("");
  const [userid, setUserid] = useState(false);



  function doLogout() {
    LocalStorage.removeUserInfo();
    setUser(null);

  }




  return (
    <div className="App">
           
      <header className="App-header">
      
      </header>
      <NavBar logOutCb={doLogout} />
     
     <div className='content'>
     <AppRouter/>

     </div>
     
  
    </div>
  );
}

export default App;
