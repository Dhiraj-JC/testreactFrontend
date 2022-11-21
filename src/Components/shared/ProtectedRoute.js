import { Navigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';

export default function ProtectedRoute({children}) {

    const token = localStorage.getItem('token');
    const NavigateToLoginScreen = <Navigate to='/login' />;


    if(!token) {
        return NavigateToLoginScreen;
    }

    const decoded = jwt_decode(token);
    if(decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
        return NavigateToLoginScreen;
    }

    return children;

}
