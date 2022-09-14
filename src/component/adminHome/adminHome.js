import React from "react";
import Navbar from "./navbar";
import DisplayAllPost from "../post/displayAllPost";

function AdminHome() {

  return (
    <>
      <Navbar />
      <div>
      <div>
        <DisplayAllPost />
      </div>
      </div>
    </>
  );
}

export default AdminHome;
