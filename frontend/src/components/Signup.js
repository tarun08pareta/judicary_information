import React from "react";
import "../css/Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const Navigate = useNavigate();

  // to nevigate to login page
  const gotoLogin = () => {
    Navigate("../Login");
  };

  const [fullName, setFullName] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [type, setType] = useState();
  const [mobileNo, setMobileNo] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleChange = (e) => {
    // console.log('some change take place');
    // console.log(e.target.value);
    // console.log(e.target.name);
    if (e.target.name === "fullName") setFullName(e.target.value);
    else if (e.target.name === "username") setUserName(e.target.value);
    else if (e.target.name === "email") setEmail(e.target.value);
    else if (e.target.name === "phoneNumber") setMobileNo(e.target.value);
    else if (e.target.name === "password") setPassword(e.target.value);
    else if (e.target.name === "confirmPassword")
      setConfirmPassword(e.target.value);
    // console.log(fullName, userName, email, mobileNo, password, confirmPassword);
  };

  const handleClick = (e) => {
    // console.log('clicked');
    // console.log(e.target.id)
    if (e.target.name === "gender") setGender(e.target.id);
    else setType(e.target.id);
    // console.log(gender, type);
  };

  const sendData = async (e) => {
    e.preventDefault();
    // console.log("clicked on send data button");
    let data = {
      userName: userName,
      password: password,
      userType: type,
      fullName: fullName,
      email: email,
      gender: gender,
      mobileNo: mobileNo,
    };
    if (
      userName &&
      password &&
      type &&
      fullName &&
      gender &&
      email &&
      confirmPassword &&
      mobileNo
    ) {
      if (password === confirmPassword) {
        let result = await fetch("http://localhost:5000/Signup", {
          method: "post",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        result = await result.json();
        if (result) {
          alert("registered Successfully");
          Navigate("../Login");
        } else {
          alert("failed to register");
        }
      } else {
        alert("enter same password");
      }
    } else {
      alert("please fill all the details");
    }
    // console.log(result);
  };

  return (
    <div className="sign-body">
      <div className="sign-container">
        <h1 className="sign-form-title">Registration</h1>
        <form>
          <div className="sign-main-user-info">
            <div className="sign-user-input-box">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Full Name"
                onChange={handleChange}
              />
            </div>
            <div className="sign-user-input-box">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Username"
                onChange={handleChange}
              />
            </div>
            <div className="sign-user-input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleChange}
              />
            </div>
            <div className="sign-user-input-box">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                onChange={handleChange}
              />
            </div>
            <div className="sign-user-input-box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleChange}
              />
            </div>
            <div className="sign-user-input-box">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sign-gender-details-box">
            <span className="sign-gender-title">Gender</span>
            <div className="sign-gender-category">
              <input
                type="radio"
                name="gender"
                id="male"
                onClick={handleClick}
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                id="female"
                onClick={handleClick}
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                name="gender"
                id="other"
                onClick={handleClick}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className="sign-gender-details-box">
            <span className="sign-gender-title">Login As</span>
            <div className="sign-gender-category">
              <input
                type="radio"
                name="type"
                id="judge"
                onClick={handleClick}
              />
              <label htmlFor="judge">Judge</label>
              <input
                type="radio"
                name="type"
                id="lawyer"
                onClick={handleClick}
              />
              <label htmlFor="lawyer">Lawyer</label>
              <input
                type="radio"
                name="type"
                id="registrar"
                onClick={handleClick}
              />
              <label htmlFor="registrar">Registrar</label>
              <p
                style={{
                  color: "blue",
                  fontSize: "18px",
                  float: "right",
                  cursor: "pointer",
                }}
                onClick={gotoLogin}
              >
                Login
              </p>
            </div>
          </div>
          <div className="sign-form-submit-btn">
            <button onClick={sendData}>Register</button>{" "}
            {/*we can also mention type=button to prevent default behaviour of button(to submit data) or we can call e.preventDefault in senddata */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
