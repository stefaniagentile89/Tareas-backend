module.exports = {
    hola (req,res) {
        let nombre = req.params.name;
        let apellido = req.params.lastName;
        res.send(`Hola ${nombre} ${apellido}`)
    }
}