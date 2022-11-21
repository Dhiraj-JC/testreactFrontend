import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { customPOST } from '../utilities';
import { emailPattern,passwordPattern } from '../utilities/regularExpressions';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();
  
  function onSubmit(event) {
    event.preventDefault();

    setUserNameStateAndError(userName);
    setPasswordStateAndError(password);

    if(!emailPattern.test(userName) || !passwordPattern.test(password)) {
      return;
    }

    const request = {
      userName: userName,
      password: password
    };

    customPOST('auth/login',request)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      })
      .catch((error) => {
        window.alert('Username or password is incorrect');
      })
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


  return (
    <>
      <div className='container pt-5'>
        <h1 className="display-1 pb-2">My Space</h1>
        <div className='card'>
          <div className='card-header'>Login</div>
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
              <button type='submit' className='btn btn-primary'>
                Login
              </button>
              <Link to='/signup' className='card-link' style={{ marginLeft: '10px' }}>
                Sign up
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
