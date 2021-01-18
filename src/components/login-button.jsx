import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "react-loader-spinner";

const LoginButton = ({setAuthenticated,setUser}) => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  React.useEffect(() => {
    isAuthenticated&&setAuthenticated(true)
  },[isAuthenticated, setAuthenticated])
  
  if (isAuthenticated) {
    window.sessionStorage.setItem("logged", true)
  }
  
  user && setUser(user)

  if (isLoading) {
    return (
      <div className="container d-flex justify-content-center mt-3">
        <Loader
          type="Rings"
          color="#007F7F"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }

  return (
    <div className="login-screen light-bgg">
      <h4 className="text-center mb-1">GitHub Users</h4>
        <div className="d-flex justify-content-center">
          <img
            alt=""
            src="https://imgur.com/FPH0ozU.jpg"
            className="imgg-container"
          />
      </div>
      <div className="align-self-center">
        <button className="btn btn-outline-dark mt-2" onClick={loginWithRedirect}>Log In</button>
      </div>
    </div>
  );
};

export default LoginButton;
