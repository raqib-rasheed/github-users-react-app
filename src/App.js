import React from 'react'
import './App.css';
// import Charts from './components/charts/charts';
import SearchUser from './components/searchuser';
import UserCard from './components/user-card';
import UserStats from './components/user-stats';
import MyCharts from "./components/charts/charts";


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
      />

       {/* <UserStats query={query} langImg={langImg} user={user} gists={gists} />  */}
      
      <UserCard user={user} />  

      <MyCharts user={user} />
    </div>
  );
}

export default App;

