import React, { useState } from "react";
import "./signuppage.css";
import { registerCustomer } from "../services/signup"; // Import the API function
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [password, setPassword] = useState("");
  const [contactError, setContactError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleContactChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setContactNumber(value);
      setContactError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contactNumber.length !== 10) {
      setContactError("Contact number must be exactly 10 digits.");
      return;
    }
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      setPasswordError(
        "Password must be at least 8 characters long, with letters, numbers, and special characters."
      );
      return;
    }

    const result = await registerCustomer({
      customerName: name,
      email,
      address,
      contact: contactNumber,
      city,
      postalCode,
      password,
    });

    if (result.success) {
      alert("Registration successful!");
    } else {
      alert(result.message); // Show error message for duplicate emails or other issues
    }
  };

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
      }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ width: "600px" }}>
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>

          {/* Input fields for user details */}
          <MDBInput
            label="Your Name"
            size="lg"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            wrapperClass="mb-4"
          />
          <MDBInput
            label="Your Email"
            size="lg"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            wrapperClass="mb-4"
          />
          <MDBInput
            label="Your Address"
            size="lg"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            wrapperClass="mb-4"
          />
          <MDBInput
            label="Contact number"
            size="lg"
            type="text"
            value={contactNumber}
            onChange={handleContactChange}
            wrapperClass="mb-4"
          />
          {contactError && <p className="text-danger">{contactError}</p>}
          <MDBInput
            label="Your City"
            size="lg"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            wrapperClass="mb-4"
          />
          <MDBInput
            label="Your Postal Code"
            size="lg"
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            wrapperClass="mb-4"
          />
          <MDBInput
            label="Password"
            size="lg"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            wrapperClass="mb-4"
          />
          {passwordError && <p className="text-danger">{passwordError}</p>}

          <div className="d-flex flex-row justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I agree to all statements in Terms of service"
            />
          </div>

          <MDBBtn
            className="mb-4 w-100 gradient-custom-4"
            size="lg"
            style={{width:'100%',height:'40px'}}
            onClick={handleSubmit}
          >
            Register
          </MDBBtn>
          <a href="/admin-signin" style={{ color: "#393f81" }}>
            If you are Admin sign up here...
          </a>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
