const express = require('express')
const app = express()
const cors = require("cors")
const apiRouter= require("./ruta")


 app.use(express.json())
 app.use(cors())


 app.use('/api',apiRouter)

app.get('/', (req, res) => {
    res.json({message: `welcome to the application.`})
})

app.listen(3000, () => {
    console.log(`server is ruming on port 3000`)

})





/*
const express = require('express');
const dotenv = require('dotenv');

// variables de entorno desde .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON y manejo de rutas
app.use(express.json());

// Rutas de la API
const tuRuta = require('./routes/TU_RUTA');
app.use('/api', tuRuta);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});


*/





/*
const express = require('express')
const router = express.Router()

const reservasRouters = require(`./routers`)
router.use (`/reservas`, reservasRouter)

module. exports = router*/