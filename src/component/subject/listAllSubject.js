import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ListAllSubject() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      "https://student-status-system.herokuapp.com/api/v1/subject/all"
    );
    setUsers(result.data.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(
      `https://student-status-system.herokuapp.com/api/v1/subject/delete/${id}`
    );
    loadUsers();
  };

  return (
    <>
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">Name</th>
                <th scope="col">Semester</th>
                <th scope="col">Teacher</th>
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
                  <td>
                    <Link
                      className="btn btn-primary mx-2"
                      to={`/viewSubject/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/editSubject/${user.id}`}
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
