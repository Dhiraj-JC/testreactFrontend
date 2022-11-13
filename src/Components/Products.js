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
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => navigate('/dashboard/products/new')}
      >
        Add
      </button>
      {products.map((product) => (
        <Product key={product._id} product={product} onDelete={onDelete} />
      ))}
    </>
  );
}
