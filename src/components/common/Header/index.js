import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./style.css";
import TemporaryDrawer from "./Drawer";
function Header() {
  return (
    <div className="headerContainer">
      <h1 className="head">
        CryptoTracker<span>.</span>
      </h1>
      <div className="navlinks">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/compare">
          Compare
        </Link>
        <Link className="link" to="/watchlist">
          WatchList
        </Link>
        <Link className="link" to="/dashboard">
          <Button text="Dashboard" name="btn1" />
        </Link>
      </div>
        <div className="drawer">
          <TemporaryDrawer />
        </div>
    </div>
  );
}

export default Header;
