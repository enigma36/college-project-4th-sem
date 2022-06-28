import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import './homepage.css'

export default function Home() {
  return (
    <div className="home_container">
      <div>
        <input type="email" className="email" placeholder="email" />
        <input type="text" className="password" placeholder="password" />
        <button className="home_button">login</button>
      </div>
    
     

        <Link to="/signup" className="signup">Signup</Link>

        <Link to="/admin" className="admin">admin panel</Link>

        <Link to="/student" className="student">student panel</Link>
  
    </div>
  );
}

