import React from "react";
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
    backgroundColor: "#ffffff",
    color: "#10003c",
    boxShadow: "0 2px 2px 0 hsla(0,0%,76.9%,.5), 0 2px 4px 0 rgba(0,0,0,.12)",
  },
  selected: {
    fontFamily: "Poppins",
    fontSize: "14px",
    color: "#00c565 !important",
    fontWeight: "500",
  },
});

export default function NavBottom() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        classes={{ selected: classes.selected }}
        label="Al-Quran"
        value="alquran"
        icon={<ImportContactsRoundedIcon />}
      />
      <BottomNavigationAction
        classes={{ selected: classes.selected }}
        label="Sholat"
        value="sholat"
        component={Link}
        to="/sholat"
        icon={<QueryBuilderRoundedIcon />}
      />
    </BottomNavigation>
  );
}
