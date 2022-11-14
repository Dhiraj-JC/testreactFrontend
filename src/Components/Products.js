import { useEffect, useState } from 'react';
import { customGET, customDELETE } from '../utilities';
import Product from './Product';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    customGET('products').then((response) => setProducts(response.data));
  }, []);

  function onDelete(id) {
    if (window.confirm('Do you want to delete this item?')) {
      customDELETE(`products/${id}`).then((response) => {
        const filteredProducts = products.filter(
          (product) => product._id !== response.data._id
        );
        setProducts(filteredProducts);
      });
    }
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='display-4 pb-2'>Products</h1>
            <button
              type='button'
              className='btn btn-primary btn-lg float-end'
              onClick={() => navigate('/dashboard/products/new')}
            >
              Add
            </button>
          </div>
        </div>
        <div className='row mt-5'>
          {products.map((product) => (
            <div className='col-3' key={product._id}>
              <Product product={product} onDelete={onDelete} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
