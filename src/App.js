import React from 'react'
import './App.css';
import SearchUser from './components/searchuser';




function App() {

  const [query ,setQuery] = React.useState('raqib-rasheed');
  const [user, setUser] = React.useState({});
  const [langImg, setLangImg] = React.useState("");
  const [gists,setGists] = React.useState(0)


  return (
    <div className="app-container m-3">
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
  );
}

export default App;

