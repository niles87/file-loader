import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/profile">Profile</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </>
  );
};
