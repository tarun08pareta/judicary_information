import React, { useEffect, useState } from "react";
import img from "../images/img2.jpg";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  // MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  //   MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

const Login = () => {
  const [imageSrc, setImageSrc] = useState(img);
  const [imageno, setimageno] = useState(1);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const loadImage = async () => {
    if (imageno === 9) setimageno(1);
    else setimageno(imageno + 1);
    // console.log('load image is called')

    let imageName = `img${imageno}.jpg`;
    const { default: imageSrc } = await import(`../images/${imageName}`);
    setImageSrc(imageSrc);
  };
  useEffect(() => {
    // console.log('useeffect is called')
    const intervalId = setInterval(loadImage, 1000);
    return () => clearInterval(intervalId);
  }, [imageSrc]);
  const gotoSignup = () => {
    Navigate("../Signup");
  };

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
        Navigate("/")
    }
}, [Navigate])

  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log("cliked on login button");
    // console.log(userName,password);
    let data = { userName: userName, password: password };
    if (userName && password)
      try {
        const response = await fetch("http://localhost:5000/Login", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        // console.log(result);
        if (result.login) {
          localStorage.setItem("user", JSON.stringify(result));
          Navigate("/");
        } else {
          alert("user Not found Enter correct username and possword");
        }
      } catch (err) {
        console.error(err);
      }
      else  
       alert('enter username and password')
  };
  return (
    <MDBContainer className="my-2 my-container">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src={imageSrc}
              alt="login form"
              type="image/png"
              className="rounded-start w-100 img_size"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <img
                  src={logo}
                  alt="not found"
                  type="image/png"
                  className="logo_jis"
                />
                <span className="h1 fw-bold mb-0">Department Of Justice</span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                label="User name"
                id="formControlLg"
                type="text"
                size="lg"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLgpass"
                type="password"
                size="lg"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className="sign-form-submit-btn">
                <button onClick={handleLogin}>Login</button>
                {/*we can also mention type=button to prevent default behaviour of button(to submit data) or we can call e.preventDefault in senddata */}
              </div>
              <Link className="small text-muted" to="/">
                Forgot password?
              </Link>
              <span className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <span
                  onClick={gotoSignup}
                  style={{ cursor: "pointer", paddingLeft: "5px" }}
                >
                  Create New
                </span>
              </span>

              <div className="d-flex flex-row justify-content-start">
                <Link to="/termsofuse" className="small text-muted me-1">
                  Terms of use.
                </Link>
                <Link to="/privacypolicy" className="small text-muted">
                  Privacy policy
                </Link>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};
export default Login;
