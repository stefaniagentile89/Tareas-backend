module.exports = {
    shopping(req, res){
        if(req.query.semana == 1){
            res.json({
                semana: `compra de la semana numero ${req.query.semana}`,
                productos: 'pollo, huevos, cereales, leche, harina'
            })
        } else if(req.query.semana == 2){
            res.json({
                semana: `compra de la semana numero ${req.query.semana}`,
                productos: 'jabon, agua, papel higienico, limpia pisos, fosforos'
            })
        }else{
            res.send('la compra de esta semana no fue programada')
        }
    }
}