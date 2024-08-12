import { Link } from 'react-router-dom';

export default function CheckOutButton() {
  return (
    <div className="checkout-button">
        <Link to={'/Product'} className='link-button'><button>Continue shopping</button></Link>
    </div>
  )
}
