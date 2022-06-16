import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signup.css'

export default function StudentSignup() {
  let navigate = useNavigate();

  const [fname, setFname] = useState(false);
  const [fpassword, setFpassword] = useState(false);
  const [fconfirm, setFconfirm] = useState(false);
  const [faddress, setFaddress] = useState(false);
  const [fcontact, setFcontact] = useState(false);
  const [femail, setFemail] = useState(false);

  const [user, setUser] = useState({
    address: "",
    contact: "",
    email: "",
    name: "",
    password: "",
  });

  const { address, contact, email, name, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFocusName = (e) => {
    setFname(true);
  };

  const handleFocusPassword = (e) => {
    setFpassword(true);
  };

  const handleFocusConfirm = (e) => {
    setFconfirm(true);
  };

  const handleFocusEmail = (e) => {
    setFemail(true);
  };

  const handleFocusAddress = (e) => {
    setFaddress(true);
  };

  const handleFocusContact = (e) => {
    setFcontact(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://student-status-system.herokuapp.com/api/v1/student/save",
      user
    );
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Student</h2>

          <form onSubmit={(e) => onSubmit(e)}>
           
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                required
                value={name}
                onChange={(e) => onInputChange(e)}
                pattern="^[A-Za-z\s]{3,16}$"
                onBlur={(e) => handleFocusName(e)}
                focused={fname.toString()}
              />
                <span>
                It must have 3-16 characters and shouldn't include any special
                characters and numbers
              </span>
            </div>

            

            <div className="mb-3">

              <label htmlFor="Password" className="form-label">
                Password
              </label>

              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your password"
                name="password"
                onBlur={(e) => handleFocusPassword(e)}
                focused={fpassword.toString()}
                required
                value={password}
                onChange={(e) => onInputChange(e)}
                pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$"
              />

              <span>
                It should be 8-20 characters and include at least 1 letter,1
                number and 1 special character
              </span>

            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                onChange={(e) => onInputChange(e)}
                id="confirmPassword"
                type="text"
                className="form-control"
                onBlur={handleFocusConfirm}
                focused={fconfirm.toString()}
                required
                pattern={user.password}
                placeholder="Confirm Password"
              />
              <span>Password do not match</span>

            </div>


            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"email"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                onBlur={handleFocusEmail}
                focused={femail.toString()}
                required
                value={email}
                onChange={(e) => onInputChange(e)}
              />
              <span>It must be a valid email</span>

            </div>

            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your address"
                name="address"
                required
                onBlur={handleFocusAddress}
                focused={faddress.toString()}
                value={address}
                onChange={(e) => onInputChange(e)}
              />
              <span>address is required</span>
            </div>
            

            <div className="mb-3">
              <label htmlFor="Contact" className="form-label">
                Contact
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your contact"
                name="contact"
                required
                onBlur={handleFocusContact}
                focused={fcontact.toString()}
                value={contact}
                onChange={(e) => onInputChange(e)}
              />
              <span>contact is required</span>
            </div>


            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>

            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>

          </form>
        </div>
      </div>
    </div>
  );
}
