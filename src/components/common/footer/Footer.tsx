import '../../../css/footer.css'

import MainContent from './MainContent'
import RightFooter from './RightFooter'

export default function Footer() {
  return (
    <div className="container">
      <div className='footer'>
          <div className='footer-item '>
              <MainContent></MainContent>
          </div>

          <div className='footer-item'>
              <RightFooter></RightFooter>
              
          </div>
      </div>
       
    </div>
  )
}
