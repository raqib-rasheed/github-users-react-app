import React from 'react';
import { getUser } from '../utils/get-user';
import {getGists} from '../utils/get-user';
import sortedRepo from './charts/charts-index';

export default function SearchUser({ setQuery, setUser, setLangImg, query,setGists, user }) {
  const [userInput, setUserInput] = React.useState('');
  
  const getUserfunc = React.useCallback(async () => {
    const res = await getUser(query)
    setUser(res.data)
  },
    [query, setUser]);
  
  React.useEffect(() => {
    getUserfunc();
    getGists(query)
      .then(res => setGists(res.data.length))
  }, [ getUserfunc, query, setGists, user.repos_url]);



  function handleClick() {
    setQuery(userInput);
  }
  return (
    <div className="container d-flex mt-3">
      <div className="input-group mb-3">
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          className="form-control"
          placeholder="search a valid username"
          aria-label="search a valid username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          onClick={handleClick}
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </div>
  );
}