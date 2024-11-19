import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
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
import AuthService from "../services/auth"; // Import the AuthService
import { deleteCustomer } from "../services/auth"; // Import the delete function


export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = async () => {
    try {
      const response = await AuthService.login(email, password);
      if (response.data) {
        // Save the token and email in local storage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", email); // Store the email
  
        // Navigate to the /homePage
        setMessage("You are Logging Successfully!");
        alert("You are logging success!");
        navigate("/homePage");
      }
    } catch (error) {
      setMessage("Invalid email or password. Please try again.");
    }
  };

  const onDeleteClick = async () => {
    try {
        const response = await deleteCustomer(email, password);
        setMessage(response.data); // Display the success message
    } catch (error) {
        setMessage("Failed to delete customer. Invalid email or password.");
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

              <MDBBtn
                id="btn-login"
                className="mb-4 px-5"
                color="dark"
                size="lg"
                onClick={handleLogin} // Trigger the login function
              >
                Login
              </MDBBtn>
              {message && <p className="text-danger text-center">{message}</p>}
              <a className="small text-muted" href="#!">
                Forgot password?
              </a>
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <a href="/signup" style={{ color: "#393f81" }}>
                  Register here
                </a>
              </p>
              

              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Do you want to update or delete your account?
                <div className="d-flex justify-content-center mb-2" style={{ marginTop: "20px" }}>
                  <MDBBtn color="warning" size="md" className="me-2" id="btn-update">
                    Update
                  </MDBBtn>
                  <MDBBtn color="danger" size="md" className="me-2" id="btn-delete" onClick={onDeleteClick}>
                    Delete
                  </MDBBtn>
                </div>
              </p>




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
