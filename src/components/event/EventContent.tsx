import { Link } from 'react-router-dom';

export default function EventContent() {
  return (
    <div className="content-wrapper">
      {/* 1 */}
      <div className="content">
        <div className="content-item">
          <img src="../../img/event_page1.jpg" alt="" />
        </div>
        <div className="content-item">
          <div className="article">
            <div className="title">Promotion title</div>
            <div className="content-article">
              Et ipsum irure amet cupidatat mollit exercitation consequat duis aliquip. Reprehenderit Lorem veniam pariatur esse pariatur in aute tempor au
            </div>
            <div className="end-content">
              *Velit deserunt elit proident velit anim adipisicing
            </div>
            <div className="button-content">
              <Link to={'/Product'} className='link-button'><button>Shop now</button></Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="content">

        <div className="content-item">
          <div className="article">
            <div className="title">Promotion title</div>
            <div className="content-article">
              Et ipsum irure amet cupidatat mollit exercitation consequat duis aliquip. Reprehenderit Lorem veniam pariatur esse pariatur in aute tempor au
            </div>
            <div className="end-content">
              *Velit deserunt elit proident velit anim adipisicing
            </div>
            <div className="button-content">
              <Link to={'/Product'} className='link-button'><button>Shop now</button></Link>
            </div>
          </div>
        </div>

        <div className="content-item">
          <img src="../../img/event_page2.jpg" alt="" />
        </div>

      </div>

      {/* 3 */}
      <div className='gift'>
          <img src="../../img/event_page3.jpg" alt="" />
          <div className='gift-content'>
              <div className='title'>Gift for your skin</div>
              <div className='content-gift'>Enim officia magna ut esse aliquip irure consectetur dolor dolor commodo et. Cupid</div>
              <div className='button-content'>
                  <Link to={'/Product'} className='link-button'><button>Shop Now</button></Link>
              </div>
          </div>
      </div>
    </div>
  )
}
