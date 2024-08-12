import { Link } from "react-router-dom";


export default function EventContent() {
  return (
    <div className="event-group">
      <div className="event-item">
        <img src="/pratice-react/img/event1.jpg" alt="" />
        <div className="event-content">
          <div>
            <span className="title">Relaxing & Pampering</span>
            <span className="content">Pariatur ad nisi ex tempor ea</span>
            <Link to={"/pratice-react/Event"} className="button-event"><button>Explore</button></Link>
          </div>

        </div>

      </div>

      <div className="event-item">
        <img src="/pratice-react/img/event2.jpg" alt="" />
        <div className="event-content">
          <div>
            <span className="title">Smooth &
              Bright Skin</span>
            <span className="content">Pariatur ad nisi ex tempor ea</span>
            <Link to={"/pratice-react/Event"} className="button-event"><button>Explore</button></Link>
          </div>

        </div>
      </div>
    </div>
  )
}
