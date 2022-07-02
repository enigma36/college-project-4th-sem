import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddSubject() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    semester: "",
    teacherId:''
  });

  const [Tname, setTname] = useState([]);

  const { name, semester, teacherId } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

 

  useEffect(() => {
    teacherNames();
  }, []);

  const teacherNames = async () => {
    const result = await axios.get(
      "https://student-status-system.herokuapp.com/api/v1/teacher/all"
    );
    setTname(result.data.data);
    console.log(Tname);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://student-status-system.herokuapp.com/api/v1/subject/save",
      user
    );
    navigate("/subjectlist");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Subject</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Subject Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the name of the subject"
                name="name"
                value={name}
                required
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="semester" className="form-label">
                semester
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the semester"
                name="semester"
                value={semester}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="teacherId" className="form-label">
                Teacher
              </label>
              <input
                onChange={(e) => onInputChange(e)}
                id="teacherid"
                type="text"
                className="form-control"
                required
                placeholder="teacher"
                value={teacherId}
                name="teacherId"
              />
            </div>

            
            <div className="mb-3">
              <select className="form-control"
              >
                {Tname.map((teacherData, index) => (
                <option key={index}>id:{teacherData.id} name:{teacherData.name}</option>
                ))}
              </select>
            </div>
                

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/subjectlist">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
