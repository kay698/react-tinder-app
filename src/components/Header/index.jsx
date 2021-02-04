import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import "./styles.css";

const Header = () => {
  return (
    <div  className="header_cover">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>
      <img src={require("../../assets/tinder.png")} alt="tinder_logo" className="logo"/>
    </div>
  );
};
export default Header;
