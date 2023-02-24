module.exports = {
    suma(req, res){
        let n1 = Number(req.params.valor1);
        let n2 = Number(req.params.valor2);
        if(n1 >= 0 && n2 >=0){
            res.json({
                resultado: n1 + n2
            })
        } else {
            res.json({
                error: 'No se aceptan numeros negativos'
            })
        }
    }
}