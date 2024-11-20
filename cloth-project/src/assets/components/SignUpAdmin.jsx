import React, { useState } from 'react';
import { registerAdmin } from '../../services/signupAdmin'; // New service function for admin registration
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';

export default function SignUpAdmin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhoneNumber(value);
      setPhoneError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits.');
      return;
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      setPasswordError('Password must be at least 8 characters long, with letters, numbers, and special characters.');
      return;
    }

    const result = await registerAdmin({
      name,
      email,
      phoneNumber,
      password,
    });

    if (result.success) {
      alert('Admin registration successful!');
    } else {
      alert(result.message);
    }
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(admin-background.webp)' }}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{ width: '600px' }}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Admin Sign-Up</h2>
          <MDBInput label='Your Name' size='lg' type='text' value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' />
          <MDBInput label='Your Email' size='lg' type='email' value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' />
          <MDBInput label='Phone Number' size='lg' type='text' value={phoneNumber} onChange={handlePhoneChange} wrapperClass='mb-4' />
          {phoneError && <p className="text-danger">{phoneError}</p>}
          <MDBInput label='Password' size='lg' type='password' value={password} onChange={handlePasswordChange} wrapperClass='mb-4' />
          {passwordError && <p className="text-danger">{passwordError}</p>}

          <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree to all terms' wrapperClass='d-flex flex-row justify-content-center mb-4' />
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleSubmit}>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
