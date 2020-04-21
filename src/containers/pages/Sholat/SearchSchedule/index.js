import React, { useState } from "react";
import Search from "../../../../components/atoms/Search";
import "./searchSchedule.scss";
import json from "../../../../Json/kota.json";

function SearchSchedule(props) {
  const [keyword, setKeyword] = useState("");
  const [display, setDisplay] = useState("none");
  const handleChange = (e) => {
    setKeyword(e.target.value);
    if (e.target.value.length > 0) {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };

  const listSearch = json.kota
    .filter((data) => {
      if (
        data.nama.toLowerCase().search(keyword.toLowerCase()) != -1 &&
        keyword.length > 0
      )
        return data;
    })
    .map((list) => {
      return <li onClick={()=> {localStorage.setItem("idKota", list.id); window.location.reload()}}>{list.nama}</li>;
    });

  return (
    <div className={`search ${props.visibility}`}>
      <Search keyword={keyword} handleChange={handleChange} />
      <div className="search__result" style={{ display: display }}>
        <ul>{listSearch}</ul>
      </div>
    </div>
  );
}

export default SearchSchedule;
