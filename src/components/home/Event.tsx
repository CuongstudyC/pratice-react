import EventContent from "./EventContent";



export default function Event() {
  return (
    <div className='home-container'>
      <div className='home-event'>
        <div className="title-event">
          <h2>Event promotion</h2>
          <button >See all</button>
        </div>


        <div>
          <EventContent></EventContent>
        </div>

      </div>
    </div>
  )
}
