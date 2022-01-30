import React from "react";

const SearchBar = ({ searchedBeer, callback }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search a beer"
        value={searchedBeer}
        onChange={(evt) => callback(evt.target.value)}
      />
    </div>
  );
};

export default SearchBar;
