const getInfo = (req, res) => {
    res.status(200).json({
        nombre: "Samuel Isaac Pérez Pérez",
        carnet: "201902308"
    })
}

module.exports = {
    getInfo
}