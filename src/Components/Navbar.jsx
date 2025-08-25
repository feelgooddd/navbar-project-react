import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <header>
      <MobileNav />
      <DesktopNav />
    </header>
  );
}
