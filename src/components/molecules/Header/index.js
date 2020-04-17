import React from "react";
import "./header.scss";
import Search from "../../atoms/Search";

function Header(props) {
  return (
    <div className="header">
      <div className="header__bg">
        <div className="header__bg-text">
          <div className="text-title">
            Al-Quran <br />
            Digital
          </div>
          <div className="text-desc">Read & listen everywhere</div>
        </div>
      </div>
      <div className="header__search">
        <div className="header__search-container">
          <Search keyword={props.keyword} handleChange={props.handleChange}/>
        </div>
      </div>
    </div>
  );
}
export default Header;
