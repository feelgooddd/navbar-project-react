export default function Hamburger({ isOpen, toggleMenu }) {
  return (
    <button
      className="hamburger"
      onClick={toggleMenu}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      ☰
    </button>
  );
}
