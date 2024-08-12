import { BrowserRouter } from 'react-router-dom'
import './css/App.css'
import BoxRouter from './components/routes/BoxRouter'

function App() {

  return (
    <>
      <BrowserRouter>
      <div className='app'>
      <BoxRouter></BoxRouter>
      </div>     
      </BrowserRouter>
      
    </>
  )
}

export default App
