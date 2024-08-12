import '../../css/history.css';
import OfferContent from './OfferContent';
import OfferTitle from './OfferTitle';

export default function OfferPage() {
  return (
    <div className="offer-page">
        <div className="container">
          <div className="checkout-container">
              <div className='offer-wrapper'>
                  <OfferTitle></OfferTitle>
                  <OfferContent></OfferContent>
              </div>
          </div>
        </div>
    </div>
  )
}
