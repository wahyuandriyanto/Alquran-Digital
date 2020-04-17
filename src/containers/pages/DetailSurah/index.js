import React from "react";
import { useFetch } from "../../../config/API";
import "./detailSurah.scss";
import Nav from "../../../components/atoms/Nav";
import { useParams } from "react-router-dom";

function DetailSurah() {
  let { id } = useParams();
  const [data, loading] = useFetch(
    `https://al-quran-8d642.firebaseio.com/surat/${id}.json`
  );
  return (
    <React.Fragment>
      <Nav surah={localStorage.getItem("Surah")}/>
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
