import React, { useState } from "react";
import "./listSurah.scss";
import { useFetch } from "../../../config/API";
import { Link } from "react-router-dom";

function ListSurah(props) {
  const [data, loading] = useFetch(
    "https://al-quran-8d642.firebaseio.com/data.json"
  );
  const handleClick = (e) => {
    localStorage.setItem("Surah", e.target.innerHTML);
  };

  const listFilter = data
    .filter((list) => {
      if (list.nama.toLowerCase().search(props.keyword.toLowerCase()) !== -1)
        return list;
    })
    .map((list) => {
      return (
        <tr>
          <td>{list.nomor}</td>
          <td>
            <Link to={`/detail/${list.nomor}`} onClick={handleClick}>
              {list.nama}
            </Link>
          </td>
          <td>{list.asma}</td>
        </tr>
      );
    });
  return loading ? (
    "Loading..."
  ) : (
    <React.Fragment>
      <table>{listFilter}</table>
    </React.Fragment>
  );
}

export default ListSurah;
