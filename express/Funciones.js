const conn = require ('./connect2')


async function obtenerServicios(req, res) {
    try {
        const resultado = await conn.query(
            'SELECT nombre_servicio, componentes, precio, estatus FROM servicios'
        );
        res.json(resultado.rows); 
    } catch (error) {
        console.error(error);
        res.status(500).send('No se pudo obtener la información de los servicios');
    }
}





module.exports={ obtenerServicios};