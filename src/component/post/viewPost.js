import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewPost() {


  const [user, setUser] = useState({
    addedDate: "",
    content: "",
    faculty: "",
    semester:'',
    title:''
  });

  const { id } = useParams();
  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const result = await axios.get(`https://student-status-system.herokuapp.com/api/v1/post/${id}`);
    setUser(result.data.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Post Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Title:</b>
                  {user.title}
                </li>
                <li className="list-group-item">
                  <b>Content:</b>
                  {user.content}
                </li>
                <li className="list-group-item">
                  <b>Semester:</b>
                  {user.semester}
                </li>
                <li className="list-group-item">
                  <b>Faculty:</b>
                  {user.faculty}
                </li>
                <li className="list-group-item">
                  <b>Added Date:</b>
                  {user.addedDate}
                </li>
                <li className="list-group-item">
                  <b>ID:</b>
                  {user.id}
                </li>
              </ul>
            </div>
          </div>
        
          <Link className="btn btn-primary my-2" to={"/admin"}>
            Back 
          </Link>
        </div>
      </div>
    </div>
  );
}
