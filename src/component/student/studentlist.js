import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function DisplayAllStudent() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      "https://student-status-system.herokuapp.com/api/v1/student/all"
    );
    setUsers(result.data.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(
      `https://student-status-system.herokuapp.com/api/v1/student/delete/${id}`
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
                <th scope="col">Address</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
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
                  <td>{user.address}</td>
                  <td>{user.email}</td>
                  <td>{user.contact}</td>

                  <td>
                    <Link
                      className="btn btn-primary mx-2"
                      to={`/viewstudent/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/editstudent/${user.id}`}
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
          
          <Link className="btn btn-outline-primary mx-2" to="/addstudent">
            Add Student
          </Link>

          <Link className="btn btn-outline-primary mx-2" to={`/admin`}>
            Return
          </Link>
        </div>
      </div>
    </>
  );
}
