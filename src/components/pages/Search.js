import React from "react";

function Search(props) {
  const options = [];
  const imgs = [];
  for(let i=0; i<props.breeds.length; i++){
    options.push(<option>{props.breeds[i]}</option>);
  }
  for(let i=0; i<props.results.length; i++){
    imgs.push(<img alt={`img ${i}`} src={props.results[i]} style={{ height: "300px", width: "300px"}}/>);
  }
   return (
    <div>
      <h1>Search Page</h1>
      <form onSubmit={props.newFriends.bind(this)}>
        <datalist id="breeds">
          {options}
        </datalist>
        <input type="text" name="searchedBreed" list="breeds" value={props.searchedBreed} onChange={props.handleInputChange.bind(this)}  />
        <button>Search!</button>

      </form>
      <br />
      {imgs}
    </div>
  );
}

export default Search;
