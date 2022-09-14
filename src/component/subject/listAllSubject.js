import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ListAllSubject() {
  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  const { id } = useParams();

  const [Tname, setTname] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    getTeacherName();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      "https://student-status-system.herokuapp.com/api/v1/subject/all"
    );
    console.log(result)
    setUsers(result.data.data);
  };

  const searchID = (e) => {
    setSearch(e.target.value);
  };

  const deleteUser = async (id) => {
    await axios.delete(
      `https://student-status-system.herokuapp.com/api/v1/subject/delete/${id}`
    );
    loadUsers();
  };
  {
    /*
 const getTeacherName = async (Tid) => {
    const result = await axios.get(
      `https://student-status-system.herokuapp.com/api/v1/teacher/${Tid}`
    );
    
       //setTname(result.data.data.name); 
        console.log(result.data.data.name);
  };
  */
  }

  const getTeacherName = async () => {
    const result = await axios.get(
      "https://student-status-system.herokuapp.com/api/v1/teacher/all"
    );
    setTname(result.data.data);
  };

  return (
    <>
      <div className="container">
        <div className="py-4">
          <div>
            {console.log(Tname)}
            <input value={search} onChange={(e) => searchID(e)} type="text" />
            <Link
              className="btn btn-primary mx-2"
              to={`/viewsubject/${search}`}
            >
              view
            </Link>
            <Link
              className="btn btn-primary mx-2"
              to={`/editsubject/${search}`}
            >
              edit
            </Link>
          </div>
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">Name</th>
                <th scope="col">Semester</th>
                <th scope="col">Teacher</th>
                <th scope="col">Teacher Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{user.name}</td>
                  <td>{user.semester}</td>
                  <td>{user.teacherId}</td>
                  {/*<td value={getTeacherName(user.teacherId)}>{Tname}</td> */}
                  <td>{Tname.map((Tname) => {
                    if (Tname.id == user.teacherId) {
                      return Tname.name;
                    }
                  })}</td>
                  <td>
                    <Link
                      className="btn btn-primary mx-2"
                      to={`/viewsubject/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/editsubject/${user.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Link className="btn btn-outline-primary mx-2" to={`/addsubject`}>
            Add Subject
          </Link>

          <Link className="btn btn-outline-primary mx-2" to={`/admin`}>
            Return
          </Link>
        </div>
      </div>
    </>
  );
}
