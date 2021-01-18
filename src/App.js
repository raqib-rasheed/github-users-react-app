import React from 'react'
import './App.css';
import AuthenticatedApp from "./components/authenticated-app";
import LoginButton from "./components/login-button";

function App() {
  const [loggedUser, setLoggedUser] = React.useState({});
  const [authenticated, setAuthenticated] = React.useState(false)
  const isLogged = window.sessionStorage.getItem("logged")
  
  return (
    <>
      {
        isLogged ? (
        <AuthenticatedApp
          loggedUser={loggedUser}
        />
      ) : (
        <LoginButton
          setUser={setLoggedUser}
          setAuthenticated={setAuthenticated}
        />
      )}
    </>
  );
}

export default App;

