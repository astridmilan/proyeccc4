

let reservas = [{
    id: 1,
        name: 'habitacion matrimonial',
        restaurant: 'Hotel el dorado',
        date: '2024-07-20',
        status: 'recerva Enviada',
        price: 1,
        quantity: 2,
        total: 200,
}]

const getReservas = async(req,res) => {
    res.json ({
        msg: "todas las reservas de la base de datos",
        data: reservas
    }      
    )
}

const getReservasId = async (req,res) => {
    const orderId = parseInt(req,params.id)
    const order = reservas.find((o) => o.id === orderId)
    if(order){
        return res. status(404).json({msg:"no se encuentra en la base de datos"})
    }

        res.json ({
        msg: "reserva localizada",
        data: order

    })
}
const postReserva = async(req,res) => {
    const newReserva = req.body
    newReserva.id = reservas.length + 1 
//
    reservas.push(newReserva)

    res.status(200).json ({
        msg:"reserva enviada",
    data: reservas
    })
    }

    const putReserva = async(req,res) => {
        const orderId = parseInt(req,params.id)
        const reservaIndex = reservas.findIndex((o) => o.id === orderId)

        if(reservaIndex === -1){
            return res.status(404).json ({
                msg: "elemento no encontrado en la base, no es posible actualizar"
            })
        }

            reservaIndex [orderId] = {...[reservas], ...req.body}
            res.json ({
                msg: "reserva actualizada",
                data: reservas[reservaIndex]

            })
    }

    const deleteReservas = async(req,res) => {
        const orderId = parseInt(req,params.id)
        const reservaIndex = reservas.findIndex((o) => o.id === orderId)

        reservas.splice(reservaIndex, 1)
        res.json({
            msg: "dato eliminado correctamente"
        })
    }

    module.exports = {
        getReservas,
        getReservasId,
        postReserva,
        putReserva,
        deleteReservas
    }



/*
otra forma de controladores para todas obtener todas las reservas 

    // Ejemplo de controlador para obtener todas las reservas
const obtenerTodasLasReservas = (req, res) => {
    // Lógica para obtener las reservas desde la base de datos u otro servicio
    res.json({ msg: 'Obteniendo todas las reservas' });
};

module.exports = {
    obtenerTodasLasReservas,
};
*/