import React, { useState, useEffect } from "react";
import { useFetch } from "../../../config/API";
import "./detailSurah.scss";
import Nav from "../../../components/atoms/Nav";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import starIcon from "../../../assets/img/icons/star.svg";
import allSurat from "../../../Json/allSurat.json";

function DetailSurah() {
  const [toggle, setToggle] = useState("play");
  let { id } = useParams();
  // const surah = localStorage.getItem("Surah");
  const surah = allSurat
    .filter((data) => {
      if (data.nomor === id) {
        return data;
      }
    })
    .map((data) => {
      return data.nama;
    });
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
        if (data.nama === surah[0]) {
          const audio = new Audio(data.audio);
          if (toggle === "play") {
            audio.play();
          } else {
            window.location.reload();
          }
        }
      });
    }
    fetchData();
  };

  // focus to history
  setTimeout(() => {
    if (localStorage.getItem("idSurat") === id) {
      const ele = document.getElementById(localStorage.getItem("idAyat"));
      ele.style.backgroundColor = "rgba(0, 197, 101, 0.2)";
      window.scrollTo(ele.offsetLeft - 60, ele.offsetTop - 60);
    }
  }, 2000);

  return (
    <React.Fragment>
      <Helmet>{/* <title>Surah {surah()}</title> */}</Helmet>
      <Nav surah={surah} handleClick={handleClick} class={toggle} />
      {loading ? <div className="loading">Loading...</div> : ""}
      <div className="detail-surah">
        {data.map((list) => (
          <div className="detail-surah__content" id={list.nomor}>
            <div className="detail-surah__content-ar">
              <div
                className="ayat"
                onClick={() => {
                  localStorage.setItem("idSurat", id);
                  localStorage.setItem("idAyat", list.nomor);
                  alert("Berhasil disimpan");
                }}
              >
                <img src={starIcon} alt="star" />
                <span>{list.nomor}</span>
              </div>
              <div className="arab">{list.ar}</div>
            </div>
            <div className="detail-surah__content-id">{list.id}</div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default DetailSurah;
