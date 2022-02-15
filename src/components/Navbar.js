import React from "react";
import { BrandLogo } from "./BrandLogo";
import NavbarSettings from "./NavbarSettings";
import SearchBar from "./SearchBar";

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light w-100">
      <div class="container-fluid p-0">
        <BrandLogo />
        <SearchBar />
        <NavbarSettings />
      </div>
    </nav>
  );
};

export default Navbar;
