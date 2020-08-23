import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/profile" className="link">
          Profile
        </Link>
        <span> | </span>
        <Link to="/register" className="link">
          Register
        </Link>
        <span> | </span>
        <Link to="/login" className="link">
          Login
        </Link>
      </nav>
    </>
  );
};
