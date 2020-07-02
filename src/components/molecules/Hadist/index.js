import React from "react";
import "./hadist.scss";
import json from "../../../Json/hadist.json";

function Hadist() {
  const listHadist = json.map((hadist) => {
    return hadist;
  });
  const random = Math.floor(Math.random()*listHadist.length);
  return (
    <div className="hadist">
      <div className="hadist__box">
        <div className="hadist__text">
            "{listHadist[random].text}"
        </div>
        <div className="hadist__source">
            - {listHadist[random].source} -
        </div>
      </div>
    </div>
  );
}
export default Hadist;
