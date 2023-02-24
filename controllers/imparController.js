module.exports = {
    impar(req, res){
        let evalNum = req.query.numero;
        if(evalNum % 2 === 0){
            res.send('es par')
        } else {
            res.send('no es par')
        }
    }
}