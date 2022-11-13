import { useNavigate,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { customPUT,customGET } from "../utilities";

export default function UpdateProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(()=> {
    customGET(`products/${id}`)
    .then(response => {
      const product = response.data;
      setName(product.name);
      setDescription(product.description);
      setQuantity(product.quantity);
      setPrice(product.price);
    });
  },[]);

  function onsubmit(event) {
    event.preventDefault();
    const request = {
      name,
      description,
      quantity,
      price
    };

    customPUT(`products/${id}`,request)
    .then(response => navigate('/dashboard/products'));
  }

  return (
    <div className='container mt-5'>
      <div className='card'>
        <h5 className='card-header'>Update</h5>
        <div className='card-body'>
          <form onSubmit={onsubmit}>
            <div className='form-group mt-2'>
              <label htmlFor='productName' className='mb-2'>
                Product Name
              </label>
              <input
                type='text'
                className='form-control'
                id='productName'
                placeholder='Product Name'
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
