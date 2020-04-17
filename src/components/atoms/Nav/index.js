import React from "react";
import backIcon from "../../../assets/img/icons/back.svg";
import playIcon from "../../../assets/img/icons/play.svg";
import "./nav.scss";
import { useHistory } from "react-router-dom";

function Nav(props) {
  let history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="nav">
      <div className="nav__left" onClick={handleClick}>
        <img src={backIcon} alt="Back" />
      </div>
      <div className="nav__title">{props.surah}</div>
      <div className="nav__right" onClick={props.handleClick}>
        <img src={playIcon} alt="Play" />
      </div>
    </div>
  );
}

export default Nav;
