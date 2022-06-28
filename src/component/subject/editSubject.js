import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditSubject() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    semester: "",
    teacherId: "",
  });

  const { name, semester, teacherId } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://student-status-system.herokuapp.com/api/v1/subject/update`,
      user
    );
    navigate("/subjectlist");
  };

  const loadUser = async () => {
    const result = await axios.get(
      `https://student-status-system.herokuapp.com/api/v1/subject/${id}`
    );
    setUser(result.data.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(
      `https://student-status-system.herokuapp.com/api/v1/subject/delete/${id}`
    );
    navigate("/subjectlist");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Teacher</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3" style={{ display: "none" }}>
              <label htmlFor="ID" className="form-label">
                ID
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="ID"
                value={id}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="semester" className="form-label">
                Semester
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Address"
                name="semester"
                value={semester}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="TeacherId" className="form-label">
                TeacherID
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="TeacherId"
                name="teacherId"
                value={teacherId}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/subjectlist">
              Cancel
            </Link>
            <button
            className="btn btn-danger my-1"
            onClick={() => deleteUser(user.id)}
          >
            Delete
          </button>
          </form>
         
        </div>
      </div>
    </div>
  );
}
