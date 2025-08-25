import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function Navbar() {
  return (
    <header>
      <MobileNav />
      <DesktopNav />
    </header>
  );
}
