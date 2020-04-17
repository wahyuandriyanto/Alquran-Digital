import React, { useState } from "react";
import searchIcon from "../../../assets/img/icons/search.svg";
import "./search.scss";

function Search(props) {
  
  return (
    <div className="search-box">
      <input
        id="search"
        type="text"
        placeholder="Search"
        value={props.keyword}
        onChange={props.handleChange}
      ></input>
      <img src={searchIcon} alt="search" />
    </div>
  );
}
export default Search;
