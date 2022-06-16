import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import './homepage.css'

export default function Home() {
  return (
    <>
      <div>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button>login</button>
      </div>
      <div>
        <Link to="/signup">Signup</Link>
      </div>
      <div>
        <Link to="/admin">admin panel</Link>
      </div>
      <div>
        <Link to="/student">student panel</Link>
      </div>
    </>
  );
}
