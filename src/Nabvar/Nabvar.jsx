import { Link } from "react-router-dom";
import '/src/App.css';

export const Nabvar = () => {
  return (
    <div id="header">
      <h1>Taller</h1>

      <div>
        <ul className="navbar">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
