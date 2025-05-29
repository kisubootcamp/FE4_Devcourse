import { Link, Outlet } from "react-router";

export default function Default() {
  return (
    <>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </nav>
      <header>
        <h1>Header Component</h1>
      </header>
      <Outlet />
      <footer>
        <h1>Footer Component</h1>
      </footer>
    </>
  );
}
