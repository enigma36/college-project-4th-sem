import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    addedDate:'',
    content:'',
    faculty: "",
    semester: "",
    title:""
  });

  const { addedDate, content, faculty, semester, title } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://student-status-system.herokuapp.com/api/v1/post/update`, user);
    navigate("/admin");
  };

  const loadUser = async () => {
    const result = await axios.get(`https://student-status-system.herokuapp.com/api/v1/post/${id}`);
    setUser(result.data.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Post</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3" style={{display:"none"}}>
              <label htmlFor="ID" className="form-label">
                ID
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your contact"
                name="ID"
                value={id}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Added Date
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
              <label htmlFor="Address" className="form-label">
                Title
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Address"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Faculty
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="faculty"
                value={faculty}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Contact" className="form-label">
                Content
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your contact"
                name="content"
                value={content}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Semester
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your password"
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
