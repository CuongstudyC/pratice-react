import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'
import { GlobalContextProvider } from './components/common/globalContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalContextProvider>
  <React.StrictMode>
      <App /> 
  </React.StrictMode>
  </GlobalContextProvider>
)
