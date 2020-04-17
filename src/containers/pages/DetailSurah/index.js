import React, { useState, useEffect } from "react";
import { useFetch } from "../../../config/API";
import "./detailSurah.scss";
import Nav from "../../../components/atoms/Nav";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function DetailSurah() {
  const [toggle, setToggle] = useState("play");
  let { id } = useParams();
  const surah = localStorage.getItem("Surah");
  const [data, loading] = useFetch(
    `https://al-quran-8d642.firebaseio.com/surat/${id}.json`
  );

  const handleClick = () => {
    async function fetchData() {
      const response = await fetch(
        "https://al-quran-8d642.firebaseio.com/data.json"
      );
      const json = await response.json();
      setToggle(toggle === "play" ? "stop" : "stop");

      json.filter((data) => {
        if (data.nama === surah) {
          const audio = new Audio(data.audio);
          if (toggle === "play") {
            audio.play();
          } else {
            document.location.reload(true);
          }
        }
      });
    }
    fetchData();
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Surah {surah}</title>
      </Helmet>
      <Nav surah={surah} handleClick={handleClick} class={toggle} />
      {loading ? <div className="loading">Loading...</div> : ""}
      <div className="detail-surah">
        {data.map((list) => (
          <div className="detail-surah__content">
            <div className="detail-surah__content-ar">{list.ar}</div>
            <div className="detail-surah__content-id">{list.id}</div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default DetailSurah;
