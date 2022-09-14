import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddPost() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    addedDate:'',
    content:'',
    faculty:'',
    semester: "",
    title:''
});

  const { addedDate, content,faculty, semester, title } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://student-status-system.herokuapp.com/api/v1/post/save", user);
    navigate("/admin");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Post</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Date
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter your name"
                name="addedDate"
                value={addedDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Title
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Title"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">
                Content
              </label>
              <input
                type={"textbox"}
                className="form-control"
                placeholder="Add content"
                name="content"
                value={content}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Faculty
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Faculty"
                name="faculty"
                value={faculty}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Contact" className="form-label">
                semester
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the semester"
                name="semester"
                value={semester}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/admin">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
