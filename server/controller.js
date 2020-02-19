module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');

        db.getProducts().then(products => {
            res.status(200).send(products)
        })
    }
    
}