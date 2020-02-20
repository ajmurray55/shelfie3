require('dotenv').config();
const express = require('express')
const massive = require('massive')
const app = express();
const ctrl = require('./controller')

const { SERVER_PORT, DB_STRING, SESSION_SECRET } = process.env

app.use(express.json());

massive(DB_STRING).then(db => {
    app.set('db', db);
    console.log('DB CONNECTED')
}).catch(err => console.log(err))

// ENDPOINTS
app.get('/api/inventory', ctrl.getAll)
app.post('/api/product', ctrl.addOne)
app.delete('/api/product/:id', ctrl.delete)




app.listen(SERVER_PORT, () => console.log(`RUNNING ON SERVER PORT ${SERVER_PORT}`))