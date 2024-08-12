import '../../css/home.css'
import Event from './Event'
import Instagram from './Instagram'
import Product from './Product'
import Readme from './Readme'
// import Readme from './Readme'
import Story from './Story'
import Title from './Title'


export default function Home() {
  return (
    <div className='main-home'>
      <div className="container">

        <div className='main-home-title'>
          <Title></Title>
        </div>

          <Product></Product>
          <Event></Event>
          <Story></Story>
          <Readme></Readme>
          <Instagram></Instagram>
      </div>

    </div>
  )
}
