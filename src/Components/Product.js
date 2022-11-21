import { useNavigate } from "react-router-dom";

export default function Product({ product, onDeleteHandler }) {

  const navigate = useNavigate();

  return (
    <div className='card text-white bg-info mb-3' style={{ maxWidth: '18rem' }}>
      <div className='card-header'>{product.name}</div>
      <div className='card-body'>
        <h5 className='card-title'>{product.name}</h5>
        <p className='card-text'>{product.description}</p>
        <button type="button" className="btn btn-primary" onClick={() => {
          navigate(`/dashboard/products/${product._id}`);
        }} >Edit</button>
        <button type="button" className="btn btn-primary" onClick={() => {
          onDeleteHandler(product._id);
        }} >Delete</button>
      </div>
    </div>
  )
}
