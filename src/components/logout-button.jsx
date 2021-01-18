import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  // const { logout } = useAuth0();

  function logOut() {
    window.sessionStorage.clear();
    window.location.assign(window.location)
  }
  return (
    <button className="btn btn-default btn-outline-dark" onClick={logOut}>
      Log Out
    </button>
  );
};

export default LogoutButton;
