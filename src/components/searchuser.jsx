import React from 'react';
import { getUser } from '../utils/get-user';
import { getGists, sortedRepoLanguages } from "../utils/get-user";
import Loader from "react-loader-spinner";
import Charts from './charts/charts';
import UserCard from "./user-card";
import UserStats from "./user-stats";
import { ErrorBoundary } from "react-error-boundary";



function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}


export default function SearchUser({ setQuery, setUser, setLangImg, query, setGists, user, gists }) {
  const [userInput, setUserInput] = React.useState('');
  const [userLanguages,setUserLanguages] = React.useState({})
  const [isLoading,SetLoading] = React.useState(false)
  const [isError, SetError] = React.useState(false);

  const getUserfunc = React.useCallback(async () => {
    const res = await getUser(query)
    setUser(res)
  },[query, setUser]);
  
  React.useEffect(() => {
    try {
      SetLoading(true);
      getUserfunc(query);
      getGists(query)
        .then(res => setGists(res.data.length))
      sortedRepoLanguages(user.repos_url)
        .then(res => setUserLanguages(res))
    } catch (error) {
      SetLoading(false)
      throw new Error (error.message)
    } SetLoading(false)
  }, [getUserfunc, isLoading, query, setGists, user.repos_url]);

  function handleClick() {
      setQuery(userInput);
  }


  return (
    <>
      <div className=" d-flex mt-3">
        <div className="input-group mb-3">
          <input
            type="text"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            className="form-control py-2"
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
      {isLoading ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} 
        />
      ) : isError ?
       <></> :  (
        <>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              window.location.reload();
                }}>
                
            <UserCard user={user} />
            <UserStats user={user} gists={gists} />
                {userLanguages && <Charts
                  user={user}
                  isLoading={isLoading}
                  SetError={SetError}
                  SetLoading={SetLoading}
                  userLanguages={userLanguages}
                />}
          </ErrorBoundary>
        </>
      )}
    </>
  );
}