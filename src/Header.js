import { Avatar } from "@material-ui/core";
import React from "react";
import "./Header.scss";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt="Aditya Tiwari"
          src="{user?.photoURL}"
        />
        <AccessTimeIcon />
        {/* avatar for logged in user */}
        {/* time icon */}
      </div>
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search " />
        {/* search icon */}
        {/* input */}
      </div>
      <div className="header__right">
        {/* help icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
