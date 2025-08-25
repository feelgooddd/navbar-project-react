import React, { useState } from "react";
import NavItem from "./NavItem";
import Logo from "./Logo";
import Hamburger from "./Hamburger";

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mobile-nav">
      <div className="top-row">
        <Logo />
        <Hamburger isOpen={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)} />
      </div>

      <ul className={`nav-items ${menuOpen ? "open" : ""}`}>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Services</NavItem>
        <NavItem href="#">Contact</NavItem>
      </ul>
    </nav>
  );
}
