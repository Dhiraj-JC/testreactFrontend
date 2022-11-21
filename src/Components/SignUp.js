import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { customPOST } from "../utilities";
import { emailPattern,passwordPattern } from '../utilities/regularExpressions';

export default function SignUp() {
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();

    const request = {
      userName: userName,
      password: password,
      confirmPassword: confirmPassword
    };

    customPOST('auth/signup', request)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      });
  }

  function setUserNameStateAndError(value) {
    setUserName(value);
    
    if(value === '') {
      setUserNameError('Please enter username');
    } else if(!emailPattern.test(value)) {
      setUserNameError('Please enter valid username');
    } else {
      setUserNameError('');
    }
  }

  function setPasswordStateAndError(value) {
    setPassword(value);
    
    if(value === '') {
      setPasswordError('Please enter password');
    } else if(!passwordPattern.test(value)) {
      setPasswordError('Please enter valid password');
    } else {
      setPasswordError('');
    }
  }

  function setConfirmPasswordStateAndError(value) {
    setConfirmPassword(value);
    
    if(value === '') {
      setConfirmPasswordError('Please enter password');
    } else if(!passwordPattern.test(value)) {
      setConfirmPasswordError('Please enter valid password');
    }else if(value !== password) { 
      setConfirmPasswordError('Please enter same password which you entered in password field');
    } else {
      setConfirmPasswordError('');
    }
  }



  return (
    <>
      <div className='container pt-5'>
        <h1 className='display-1 pb-2'>My Space</h1>
        <div className='card'>
          <div className='card-header'>Sign Up</div>
          <div className='card-body'>
            <form onSubmit={onSubmit}>
              <div className='mb-3'>
                <label htmlFor='userName' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className={`form-control ${userNameError && `is-invalid`}`}
                  id='userName'
                  value={userName}
                  onChange={(event) => setUserNameStateAndError(event.target.value)}
                  onBlur={(event) => setUserNameStateAndError(event.target.value)}
                />
                {userNameError && <span className='text-danger'>{userNameError}</span>}
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className={`form-control ${passwordError && `is-invalid`}`}
                  id='password'
                  autoComplete='on'
                  value={password}
                  onChange={(event) => setPasswordStateAndError(event.target.value)}
                  onBlur={(event) => setPasswordStateAndError(event.target.value)}
                />
                {passwordError && <span className='text-danger'>{passwordError}</span>}
              </div>
              <div className='mb-3'>
                <label htmlFor='confirmPassword' className='form-label'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  className={`form-control ${confirmPasswordError && `is-invalid`}`}
                  id='confirmPassword'
                  autoComplete='on'
                  value={confirmPassword}
                  onChange={(event) => setConfirmPasswordStateAndError(event.target.value)}
                  onBlur={(event) => setConfirmPasswordStateAndError(event.target.value)}
                />
                {confirmPasswordError && <span className='text-danger'>{confirmPasswordError}</span>}
              </div>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
              <Link
                to='/login'
                className='card-link'
                style={{ marginLeft: '10px' }}
              >
                Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
