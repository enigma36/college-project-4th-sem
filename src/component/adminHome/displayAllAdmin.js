import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function DisplayAllAdmin() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      "https://student-status-system.herokuapp.com/api/v1/admin/all"
    );
    setUsers(result.data.data);
  };

  const searchID = (e) => {
    setSearch(e.target.value);
  };

  const deleteUser = async (id) => {
    await axios.delete(
      `https://student-status-system.herokuapp.com/api/v1/admin/delete/${id}`
    );
    loadUsers();
  };


  return (
    <>
      <div className="container">
        <div className="py-4">
        <div>
            <input value={search} onChange={(e) => searchID(e)} type="text" />

            <Link
              className="btn btn-primary mx-2"
              to={`/viewuser/${search}`}
            >
              view
            </Link>

            <Link
              className="btn btn-primary mx-2"
              to={`/edituser/${search}`}
            >
              edit
            </Link>
          </div>
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
                      to={`/viewuser/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/edituser/${user.id}`}
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
          
          <Link className="btn btn-outline-primary mx-2" to={`/addadmin`}>
            Add admin
          </Link>

          <Link className="btn btn-outline-primary mx-2" to={`/admin`}>
            Return
          </Link>
        </div>
      </div>
    </>
  );
}
