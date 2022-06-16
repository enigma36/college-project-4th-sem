import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/admin">
            Admin Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <Link className="btn btn-outline-light" to="/adminlist">
            List All Admin
          </Link>      

          <Link className="btn btn-outline-light" to="/studentlist">
            List All Students
          </Link>
          
          <Link className="btn btn-outline-light" to="/teacherlist">
            List All Teachers
          </Link>
          
          <Link className="btn btn-outline-light" to="/subjectlist">
            List All Subject
          </Link>

          <Link className="btn btn-outline-light" to="/addpost">
            Add Post
          </Link>
          


        </div>
      </nav>
    </div>
  );
}
