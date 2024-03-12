import React from 'react'; 
import { Route, Routes } from "react-router-dom";
import Home from "../paginas/Home";
// import Contacto from "../paginas/Contacto";
 import Ubicacion from "../paginas/Ubicacion";

import 'bootstrap/dist/css/bootstrap.min.css'; 

// Aquí se importa Bootstrap. MUCHO OJO: revisa el package.json(), descargue la paquetería react-boostrap. El boostrap común en React no funciona y hace cosas raras.  

// Cuando termines de leer esta parte dirigete a Home
function AppRouter() {
    //Ojo con la sintaxis
    const NotFound = () => {<h1>404: pagina no encontrada</h1>}
    return (

        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/ubicacion" element={<Ubicacion/>} />
                {/* Cuando tienes una función no se coloca como Componente */}
                <Route path="404" element={NotFound} />
               

            </Routes>

        </>
    );

}

export default AppRouter;