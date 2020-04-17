import React from "react";
import "./content.scss";
import ListSurah from "../ListSurah";


function Content(props) {
  return (
    <div className="content">
      <div className="content__title">
          {props.title}
      </div>
      <div className="content__detail">
          <ListSurah keyword={props.keyword}/>
      </div>
    </div>
  );
}
export default Content;
