import React from "react";
export default function Body({ searchTerm, onSearchSubmit, onInputChange }) {
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search for the books"
          value={searchTerm}
          onChange={onInputChange}
        />
        <button type="submit" className="searchButton" onClick={onSearchSubmit}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}
