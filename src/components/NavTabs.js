import React from "react";
import { Link } from "react-router-dom";

function NavTabs(props) {
  console.log(props);
  return (
    <ul className="nav nav-tabs">
      <Link to="/about" onClick={props.newPage.bind(this, "about")} className="navbar-brand" >
        Pupster
      </Link>
      <li className="nav-item">
        <Link to="/about" onClick={props.newPage.bind(this, "about")} className={props.currentPage === "about" ? "nav-link active" : "nav-link"}>
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/discover" onClick={props.newPage.bind(this, "discover")} className={props.currentPage === "discover" ? "nav-link active" : "nav-link"}>
          Discover
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/search" onClick={props.newPage.bind(this, "search")} className={props.currentPage === "search" ? "nav-link active" : "nav-link"}>
          Search
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
