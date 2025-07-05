// src/components/Layout.jsx
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <nav className="sidebar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
        {/*   <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li> */}
          <li>
            <Link to="/counter">Counter App</Link>
          </li>
          <li>
            <Link to="/rtinput">Real Time input</Link>
          </li>
           <li>
            <Link to="/quotes">Quotes Generator</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;