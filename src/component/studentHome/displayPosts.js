import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function StudentDisplayPost() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const result = await axios.get(
      "https://student-status-system.herokuapp.com/api/v1/post/all"
    );
    setUsers(result.data.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(
      `https://student-status-system.herokuapp.com/api/v1/post/delete/${id}`
    );
    loadPosts();
  };

  return (
    <>
      <div className="container">
        <div className="py-4">
        <h2 className="text-center m-4">Posts</h2>
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Semester</th>
                <th scope="col">Faculty</th>
                <th scope="col">Added Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{user.title}</td>
                  <td>{user.content}</td>
                  <td>{user.semester}</td>
                  <td>{user.faculty}</td>
                  <td>{user.addedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
