import React from 'react';
import { useNavigate, Link ,Outlet} from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light p-0 mt-2'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' width='100%' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link p-3' to='/dashboard/products'>Products</Link>
          </li>
        </ul>
      </div>
      <a
        className='nav-item mr-3 nav-link p-3 btn btn-outline-secondary'
      onClick={logout}>
        Logout
      </a>
    </nav>

    <div className='container'>
      <Outlet/>
    </div>
    </>
    
  );
}
