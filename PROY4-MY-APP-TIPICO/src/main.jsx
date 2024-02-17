import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import AppRouter from './router/AppRouter'
//Te recomiendo instalar React-boostrap. El boostrap normal a veces hace cosas raras. Te anexo la liga aquí: 
//https://react-bootstrap.netlify.app/docs/getting-started/introduction
//Solo sigue la sinstrucciones 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./css/indexStyles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Te quité el componente App ya que tu componente de rute se encuentra en AppRouter, no era necesario colocarlo dentro de App */}
    {/* <App /> */}
    <AppRouter/>
  </React.StrictMode>,
)
