import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import Products from './Components/Products';
import CreateProduct from './Components/CreateProduct';
import UpdateProduct from './Components/UpdateProduct';
import DashboardContent from './Components/DashboardContent';
import NotFound from './Components/NotFound';
import ProtectedRoute from './Components/shared/ProtectedRoute';

import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Navigate to='/dashboard' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }>
          <Route path='' element={
            <ProtectedRoute>
              <DashboardContent />
            </ProtectedRoute>
          } />
          <Route path='products' element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          } />
          <Route path='products/:id' element={
            <ProtectedRoute>
              <UpdateProduct />
            </ProtectedRoute>
          } />
          <Route path='products/new' element={
            <ProtectedRoute>
              <CreateProduct />
            </ProtectedRoute>
          } />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
