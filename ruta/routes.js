const express = require('express')
const router = express.Router()
const {productsController} = require('../controllers')

const {
    getReservas,
    getReservasId,
    postReserva,
    putReserva,
    deleteReservas
} = productsController

/*const 
    module.exports = {
        getReservas,
        getReservasId,
        postReservas,
        putReservas,
        deleteReservas,

} = requiere (`../controllers/controllers`)
 */


router.post('/', postReserva)
router.get('/', getReservas)
router.get('/:id', getReservasId)
router.put('/:id', putReserva)
router.delete('/:id', deleteReservas)

module.exports = router


/*
const express = require('express')
const router = express.Router()

const reservasRouters = require(`./routers`)
router.use (`/reservas`, reservasRouter)

module. exports = router

*/



/*
const express = require('express');
const router = express.Router();
const reservasRouter = require('../controllers/reservasRouter');
*/



/*
router.get('/reservas', reservasRouter.obtenerTodasLasReservas); 
*/

/*
module.exports = router;
*/