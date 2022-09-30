import React from "react";
import "/src/App.css";
import { Link } from "react-router-dom";

function Options() {
  return (
    <div id="bienvenida">
      <h2>Hola bienvenido al programa</h2>
      <h4>¿Que deseas hacer?</h4>
      <div>
        <ul className="btn-select">
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
}

export default Options;
