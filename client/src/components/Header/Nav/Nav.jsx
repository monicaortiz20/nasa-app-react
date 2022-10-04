import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/landing">Landings</Link>
      <Link to="/neas">Neas</Link>
    </nav>
  )
}

export default Nav