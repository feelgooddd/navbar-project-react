import NavItem from "./NavItem";
import Logo from "./Logo";

export default function DesktopNav() {
  return (
    <nav className="desktop-nav">
      <Logo />
      <ul className="nav-items">
        <NavItem href="#">Home</NavItem>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Services</NavItem>
        <NavItem href="#">Contact</NavItem>
      </ul>
    </nav>
  );
}
