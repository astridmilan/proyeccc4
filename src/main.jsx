import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes/AppRouter'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

//importe AppRouter y lo coloque dentro del BrowserRouter como componente principal
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
<AppRouter />
</BrowserRouter>
</React.StrictMode>,

)
