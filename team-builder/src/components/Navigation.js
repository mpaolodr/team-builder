import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Add Member</Link>
      </nav>
    </header>
  );
};

export default Navigation;
