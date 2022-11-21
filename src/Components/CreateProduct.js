import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { customPOST } from '../utilities';

export default function CreateProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(1);

  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();

    const request = {
      name,
      description,
      quantity,
      price,
    };

    customPOST('products', request)
      .then(response => navigate('/dashboard/products'));
  }

  return (
    <div className='container mt-5'>
      <div className='card'>
        <h5 className='card-header'>Add</h5>
        <div className='card-body'>
          <form onSubmit={onSubmit}>
            <div className='form-group mt-2'>
              <label htmlFor='productName' className='mb-2'>
                Product Name
              </label>
              <input
                type='text'
                className='form-control'
                id='productName'
                placeholder='Product Name'
                maxLength={40}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className='form-group mt-2'>
              <label htmlFor='productDescription' className='mb-2'>
                Product Description
              </label>
              <textarea
                type='text'
                className='form-control'
                id='productDescription'
                placeholder='Product Description'
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div className='form-group mt-2'>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='productQuantity' className='mb-2'>
                    Product Quantity
                  </label>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='Quantity'
                    id='productQuantity'
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                  />
                </div>
                <div className='col'>
                  <label htmlFor='productPrice' className='mb-2'>
                    Product Price
                  </label>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='price'
                    id='productPrice'
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className='form-group mt-5'>
              <button type='submit' className='btn btn-primary'>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
