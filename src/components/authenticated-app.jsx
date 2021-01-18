import React from 'react';
import SearchUser from "../components/searchuser";
import WelcomeHeader from './welcome-user';

export default function AuthenticatedApp({ loggedUser }) {
  const [query, setQuery] = React.useState("raqib-rasheed");
  const [user, setUser] = React.useState({});
  const [langImg, setLangImg] = React.useState("");
  const [gists, setGists] = React.useState(0);

  return (
    <>
      <div className="app-container m-3">
        <WelcomeHeader
          loggedUser={loggedUser}
          
        />
        <SearchUser
          query={query}
          setGists={setGists}
          setUser={setUser}
          user={user}
          setQuery={setQuery}
          setLangImg={setLangImg}
          langImg={langImg}
          gists={gists}
        />
      </div>
    </>
  );
}
