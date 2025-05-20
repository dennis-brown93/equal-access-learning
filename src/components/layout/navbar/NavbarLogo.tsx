
import React from "react";
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="flex items-center">
        <img
          src="/images/equalfffff_044048.jpg"
          alt="Logo"
          className="h-20 w-auto"
        />
      </div>
    </Link>
  );
};

export default NavbarLogo;
