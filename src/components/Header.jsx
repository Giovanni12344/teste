import { Link } from "react-router";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">inicio</Link>
        </li>

        <li>
          <Link to="/sobre">sobre</Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
