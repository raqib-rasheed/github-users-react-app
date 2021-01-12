import React from 'react'
import './App.css';
import Charts from './components/charts';
import UserCard from './components/user-card';
import UserStats from './components/user-stats';

function App() {

  const [user,setUser] = React.useState({})

  return (
  <div>
  
  {/* <Charts setUser={setUser} user={user} />
  <UserCard user={user} /> */}

  <UserStats />

  </div>
  );
}

export default App;

