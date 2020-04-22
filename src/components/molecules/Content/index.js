import React from "react";
import "./content.scss";
import ListSurah from "../ListSurah";
import { Link } from "react-router-dom";

const history = () => {
  if (localStorage.getItem("idSurat")) {
    return (
      <Link
        to={`/detail/${localStorage.getItem("idSurat")}#${localStorage.getItem(
          "idAyat"
        )}`}
      >
        <div className="history">
          Terakhir dibaca [{localStorage.getItem("idSurat")}:
          {localStorage.getItem("idAyat")}]
        </div>
      </Link>
    );
  } else {
    return <div className="history">Terakhir dibaca -</div>;
  }
};

function Content(props) {
  return (
    <div className="content">
      <div className="content__title">
        {props.title}
        {history()}
      </div>
      <div className="content__detail">
        <ListSurah keyword={props.keyword} />
      </div>
    </div>
  );
}
export default Content;
