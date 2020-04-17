import React from "react";
import "./listSurah.scss";
import { useFetch } from "../../../config/API";

function ListSurah(props) {

  const [data, loading] = useFetch(
    "https://al-quran-8d642.firebaseio.com/data.json"
  );
  
  const listFilter = data.filter((list) => {
      if (list.nama.toLowerCase().search(props.keyword.toLowerCase()) !== -1) return list;
    })
    .map((list) => {
      return (
        <tr>
          <td>{list.nomor}</td>
          <td>{list.nama}</td>
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
