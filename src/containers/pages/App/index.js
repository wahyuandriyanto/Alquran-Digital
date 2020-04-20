import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import DetailSurah from "../DetailSurah";
import Sholat from "../Sholat";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ImportContactsRoundedIcon from "@material-ui/icons/ImportContactsRounded";
import QueryBuilderRoundedIcon from "@material-ui/icons/QueryBuilderRounded";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: "30rem",
    width: "100%",
    position: "fixed",
    bottom: 0,
    height: "54px",
    backgroundColor: "#fafafa",
    color: "#10003c",
    boxShadow: "0 -3px 5px -5px #333",
  },
  selected: {
    fontFamily: "Poppins",
    fontSize: "12px !important",
    color: "#00c565 !important",
    fontWeight: "500",
  },
  label: {
    fontFamily: "Poppins",
    color: "#10003c",
  },
});

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Router>
        <Route path="/" exact component={Dashboard} />
        <Route path="/detail/:id" component={DetailSurah} />
        <Route path="/sholat" component={Sholat} />
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          classes={{ selected: classes.selected, label: classes.label }}
          label="Al-Quran"
          component={Link}
          to="/"
          icon={<ImportContactsRoundedIcon fontSize="small" />}
        />
        <BottomNavigationAction
          classes={{ selected: classes.selected, label: classes.label }}
          label="Sholat"
          component={Link}
          to="/sholat"
          icon={<QueryBuilderRoundedIcon fontSize="small" />}
        />
      </BottomNavigation>
    </Router>
  );
}

export default App;
