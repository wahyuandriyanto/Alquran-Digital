import React, { useEffect, useState } from "react";
import upIcon from "../../../assets/img/icons/up.svg";
import "./upButton.scss";

function UpButton() {
  const [visibility, setVisibility] = useState("hidden");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 250) {
      setVisibility("show");
    } else {
      setVisibility("hidden");
    }
  };
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={`up-button ${visibility}`} onClick={handleClick}>
      <div className="up-button__rounded">
        <img src={upIcon} alt="Up" />
      </div>
    </div>
  );
}

export default UpButton;
