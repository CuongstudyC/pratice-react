import '../../css/Event.css';
import EventContent from './EventContent';
import EventTitle from './EventTitle';

export default function EventPage() {
  return (
    <div className="event-page">
      <div className='container'>
        <div className='home-container'>
          <EventTitle></EventTitle>
          <EventContent></EventContent>
        </div>
      </div>

    </div>
  )
}
