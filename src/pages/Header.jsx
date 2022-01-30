import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navHome">
        <FontAwesomeIcon icon={faHome} />
      </Link>
    </div>
  );
};

export default Header;
