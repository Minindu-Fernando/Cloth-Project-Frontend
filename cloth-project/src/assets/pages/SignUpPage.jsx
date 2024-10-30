import React, { useState } from 'react';
import './signuppage.css';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [contactError, setContactError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setName(value);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Allow any input
  };

  const handleContactChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setContactNumber(value);
      setContactError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate contact number length
    if (contactNumber.length !== 10) {
      setContactError('Contact number must be exactly 10 digits.');
    } else {
      setContactError('');
    }

    // Validate password format
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      setPasswordError('Password must be at least 8 characters long, with letters, numbers, and special characters.');
    } else {
      setPasswordError('');
      console.log('Form submitted');
    }
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{width: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          
          <MDBInput 
            wrapperClass='mb-4' 
            label='Your Name' 
            size='lg' 
            id='form1' 
            type='text'
            value={name}
            onChange={handleNameChange} 
          />
          
          <MDBInput 
            wrapperClass='mb-4' 
            label='Your Email' 
            size='lg' 
            id='form2' 
            type='email' 
          />
          
          <MDBInput 
            wrapperClass='mb-4' 
            label='Your Address' 
            size='lg' 
            id='form3' 
            type='text' 
          />
          
          <MDBInput 
            wrapperClass='mb-4' 
            label='Contact number' 
            size='lg' 
            id='form4' 
            type='text'
            value={contactNumber}
            onChange={handleContactChange} 
          />
          {contactError && <p className="text-danger">{contactError}</p>}

          <MDBInput 
            wrapperClass='mb-4' 
            label='Your City' 
            size='lg' 
            id='form5' 
            type='text' 
          />
          
          <MDBInput 
            wrapperClass='mb-4' 
            label='Your Postal Code' 
            size='lg' 
            id='form6' 
            type='text' 
          />
          
          <MDBInput 
            wrapperClass='mb-4' 
            label='Password' 
            size='lg' 
            id='form7' 
            type='password'
            value={password}
            onChange={handlePasswordChange} 
          />
          {passwordError && <p className="text-danger">{passwordError}</p>}

          <MDBInput 
            wrapperClass='mb-4' 
            label='Repeat your password' 
            size='lg' 
            id='form8' 
            type='password' 
          />

          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree to all statements in Terms of service' />
          </div>

          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleSubmit}>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
