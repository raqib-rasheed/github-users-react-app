import LogoutButton from "./logout-button"; 

export default function WelcomeHeader({ loggedUser, setAuthenticated }) {
  if (loggedUser.given_name) {
    const name = loggedUser.given_name;
    window.localStorage.setItem('name',name)
  }
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <h5 className="navbar-brand">
          Welcome <span className="text-muted">{loggedUser.given_name??window.localStorage.getItem('name')} </span>
        </h5>
        <LogoutButton setAuthenticated={setAuthenticated} />
      </div>
    </nav>
  );
}