module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');

        db.getProducts().then(products => {
            res.status(200).send(products)
        })
    },

    addOne: (req, res) => {
       const db = req.app.get('db');
        const {name, price, imageurl} = req.body
        db.add_One([imageurl, name, price]).then(products => {
            res.status(200).send(products)
        })
    },

    delete: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_Product(id).then(products => {
            res.status(200).send(products)
        })
    },
    update: (req, res) => {
        const { imageurl, name, price } = req.body
        const db = req.app.get('db');
        db.update_product([name, imageurl, price, req.params.id]).then(products => {
            res.status(200).send(products)
        })
    }

    
}