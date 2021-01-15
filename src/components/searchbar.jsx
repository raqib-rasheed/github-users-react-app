import React from 'react';


export default function SearchBar({ setQuery }) {
  const [userInput, setUserInput] = React.useState("");

  function handleClick() {
    setQuery(userInput);
  }

  return (
    <>
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
    </>
  );
}