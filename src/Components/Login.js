import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { customPOST } from '../utilities';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    const request = {
      userName: userName,
      password: password,
    };

    customPOST('auth/login', request)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    })
    .catch((errorResponse)=> {
      window.alert('Username or password is incorrect');
    });
  }

  return (
    <>
      <div className='container pt-5'>
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
                  className='form-control'
                  id='userName'
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button type='submit' className='btn btn-primary'>
                Login
              </button>
              <Link to='/signup' className='card-link' style={{marginLeft: '10px'}}>
                Sign up
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
