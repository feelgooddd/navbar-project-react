export default function NavItem({ href = "#", children }) {
  return (
    <>
    <h5>hi</h5>
    <li>
      <a href={href}>{children}</a>
      
    </li>
    </>
  );
}
