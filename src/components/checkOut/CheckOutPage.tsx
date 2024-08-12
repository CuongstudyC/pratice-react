import '../../css/CheckOut.css';
import CheckOutButton from './CheckOutButton';
import CheckOutContent from './CheckOutContent';
import Title from './Title';

export default function CheckOutPage() {
  return (
    <div className="checkout">
      <div className="container">
        <div className="home-container">
            <Title></Title>
        </div>

        <div className='checkout-container'>
          <CheckOutContent></CheckOutContent>
          <CheckOutButton></CheckOutButton>
        </div>
      </div>
    </div>
  )
}
