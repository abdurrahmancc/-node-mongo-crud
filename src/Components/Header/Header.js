import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to={"/user"} style={{ marginRight: "50px" }}>
        add users
      </Link>
      <Link to={"/users"}>users</Link>
    </div>
  );
};

export default Header;
