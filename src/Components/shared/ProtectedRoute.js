import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');

  const NavigateTologinScreen = <Navigate to='/login' replace />;

  if (!token) {
    localStorage.removeItem('token');
    return NavigateTologinScreen;
  }

  const decoded = jwt_decode(token);
  if (decoded.exp * 1000 < Date.now()) {
    localStorage.removeItem('token');
    return NavigateTologinScreen;
  }

  return children;
}
