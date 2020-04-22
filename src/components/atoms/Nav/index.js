import React from "react";
import backIcon from "../../../assets/img/icons/back.svg";
import playIcon from "../../../assets/img/icons/play.svg";
import stopIcon from "../../../assets/img/icons/stop.svg";
import "./nav.scss";
import { useHistory } from "react-router-dom";

function Nav(props) {
  let history = useHistory();

  const handleClick = () => {
    history.push("/");
    window.scrollTo(0, 0)
  };

  return (
    <div className="nav">
      <div className="nav__left" onClick={handleClick}>
        <img src={backIcon} alt="Back" />
      </div>
      <div className="nav__title">{props.surah}</div>
      <div className={`nav__right ${props.class}`} onClick={props.handleClick}>
        <img src={playIcon} alt="Play" id="play"/>
        <img src={stopIcon} alt="Stop" id="stop"/>
      </div>
    </div>
  );
}

export default Nav;
