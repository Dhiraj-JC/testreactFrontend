import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import Products from './Components/Products';
import CreateProduct from './Components/CreateProduct';
import UpdateProduct from './Components/UpdateProduct';
import ProtectedRoute from './Components/shared/ProtectedRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }>
          <Route path='products' element={<Products/>}/>
          <Route path='products/:id' element={<UpdateProduct/>}/>
          <Route path='products/new' element={<CreateProduct/>}/>
        </Route>
      </Routes>
    </>
  );
}


export default App;
