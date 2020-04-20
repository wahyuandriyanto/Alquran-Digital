import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import "./sholat.scss";
import { useFetch } from "../../../config/API";
import { CalculateSeconds } from "../../../config/CalculateSeconds";
import mapIcon from "../../../assets/img/icons/map.svg";

function Sholat() {
  const date = new Date().toISOString().substr(0, 10);
  const [data, loading] = useFetch(
    `https://api.banghasan.com/sholat/format/json/jadwal/kota/736/tanggal/${date}`
  );

  const ashar =
    data && data.jadwal && data.jadwal.data && data.jadwal.data.ashar;
  const maghrib =
    data && data.jadwal && data.jadwal.data && data.jadwal.data.maghrib;
  const isya = data && data.jadwal && data.jadwal.data && data.jadwal.data.isya;
  const subuh =
    data && data.jadwal && data.jadwal.data && data.jadwal.data.subuh;
  const dzuhur =
    data && data.jadwal && data.jadwal.data && data.jadwal.data.dzuhur;
  const dhuha =
    data && data.jadwal && data.jadwal.data && data.jadwal.data.dhuha;

  //calculatehour difference
  const seconds = [
    {
      nama: "Ashar",
      detik: CalculateSeconds(ashar),
    },
    {
      nama: "Maghrib",
      detik: CalculateSeconds(maghrib),
    },
    {
      nama: "Isya",
      detik: CalculateSeconds(isya),
    },
    {
      nama: "Subuh",
      detik: CalculateSeconds(subuh),
    },
    {
      nama: "Dzuhur",
      detik: CalculateSeconds(dzuhur),
    },
  ];

  //compare detik
  const compare = (a, b) => {
    let detikA = a.detik;
    let detikB = b.detik;
    let comparison = 0;
    if (detikA > detikB) {
      comparison = 1;
    } else if (detikA < detikB) {
      comparison = -1;
    }
    return comparison;
  };

  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span>
          {("0" + hours).slice(-2)} : {("0" + minutes).slice(-2)} :{" "}
          {("0" + seconds).slice(-2)}
        </span>
      );
    }
  };

  //current pray
  const currentPray = seconds
    .sort(compare)
    .filter((time) => time.detik < 0)
    .map((next) => {
      return <div>{next.nama}</div>;
    });

  //next pray
  const nextPray = seconds
    .sort(compare)
    .filter((time) => time.detik > 0)
    .map((next) => {
      return (
        <div className="countdown__next-detail">
          <Countdown date={Date.now() + next.detik} renderer={renderer} />
          <div>going to {next.nama}</div>
        </div>
      );
    });

  return loading ? (
    "Loading..."
  ) : (
      <div className="jadwal-sholat">
        <div className="jadwal-sholat__header">
          <div className="jadwal-sholat__header-bg">
            <div className="jadwal-sholat__header-title">
              <div className="title-page">Today</div>
              <div className="title-loc">
                <img src={mapIcon} alt="location" />
                Magelang, Indonesia
              </div>
            </div>
            <div className="jadwal-sholat__header-countdown">
              <div className="countdown">
                <div className="countdown__current">{currentPray}</div>
                <div className="countdown__next">{nextPray}</div>
              </div>
            </div>
          </div>
          <div className="jadwal-sholat__header-detail">
            <div className="jadwal-detail">
              <div className="jadwal-detail__row">
                <div className="jadwal-detail__row-detail">
                  <div className="detail-name">
                    Subuh
                  </div>
                  <div className="detail-time">
                    {subuh}
                  </div>
                </div>
                <div className="jadwal-detail__row-detail">
                  <div className="detail-name">
                    Dhuha
                  </div>
                  <div className="detail-time">
                    {dhuha}
                  </div>
                </div>
                <div className="jadwal-detail__row-detail">
                  <div className="detail-name">
                    Dzuhur
                  </div>
                  <div className="detail-time">
                    {dzuhur}
                  </div>
                </div>
              </div>
              <div className="jadwal-detail__row">
                <div className="jadwal-detail__row-detail">
                  <div className="detail-name">
                    Ashar
                  </div>
                  <div className="detail-time">
                    {ashar}
                  </div>
                </div>
                <div className="jadwal-detail__row-detail">
                  <div className="detail-name">
                    Maghrib
                  </div>
                  <div className="detail-time">
                    {maghrib}
                  </div>
                </div>
                <div className="jadwal-detail__row-detail">
                  <div className="detail-name">
                    Isya
                  </div>
                  <div className="detail-time">
                    {isya}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Sholat;
