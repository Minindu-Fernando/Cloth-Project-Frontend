import React, { useState } from "react";
import "./signinpage.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import AuthService from "../services/auth"; // Import AuthService for login

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onLoginClick = async () => {
    try {
      const response = await AuthService.login(email, password);
      if (response.status === 200) {
        // Store the token in local storage
        localStorage.setItem("token", response.data.token);
        setMessage("Login successful!");
        // Redirect or take further action
      }
    } catch (error) {
      setMessage("Invalid email or password.");
      console.error("Login error:", error);
    }
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="5" lg="5">
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
              alt="login form"
              className="rounded-start w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </MDBCol>

          <MDBCol md="5" lg="5">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: "#ff6219" }} />
                <span className="h1 fw-bold mb-0">Clothify Store</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
                Sign into your account
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <MDBBtn id="btn-login" className="mb-4 px-5" color="dark" size="lg" onClick={onLoginClick}>
                Login
              </MDBBtn>
              <a className="small text-muted" href="#!">
                Forgot password?
              </a>
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <a href="/signup" style={{ color: "#393f81" }}>
                  Register here
                </a>
              </p>
              {message && <p className="text-danger text-center">{message}</p>}
              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}
