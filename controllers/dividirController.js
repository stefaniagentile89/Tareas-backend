module.exports = {
    dividir(req, res) {
        let num1 = Number(req.params.dividendo)
        let num2 = Number(req.params.divisor)
        if(num2 != 0){
            res.json({
                resultado: num1 / num2
            })
        } else {
            res.json({
                error: "no se puede dividir por 0"
            })
        }
    }
}