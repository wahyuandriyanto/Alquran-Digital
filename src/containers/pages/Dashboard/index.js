import React, { useState } from "react";
import Header from "../../../components/molecules/Header";
import Content from "../../../components/molecules/Content";
import Hadist from "../../../components/molecules/Hadist";

function Dashboard() {
  const [keyword, setKeyword] = useState("");
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <React.Fragment>
      <Header keyword={keyword} handleChange={handleChange}/>
      <Hadist />
      <Content title="Surah" keyword={keyword}/>
    </React.Fragment>
  );
}
export default Dashboard;
