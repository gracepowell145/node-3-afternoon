//require all packages that we have installed: massive, express, dotenv,
require('dotenv').config()
const express = require('express')
const massive = require('massive')

 


const products_controller = require("./controllers/products_controller");

const app = express()

const { SERVER_PORT, CONNECTION_STRING } = process.env;





massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
})
    .then(dbInstance => {
        app.set("db", dbInstance)
    })
    .catch(err => console.log(err));




app.use(express.json());

//ALRIGHT G, create those endpoints.... products_controller functions? I think that's what the endpoints are for! Got to stop somewhere (per Newton)

//UGHH endpoints. So many questions. 

app.post('/api/products', products_controller.create);
app.get('/api/products', products_controller.getOne);
app.get('/api/products', products_controller.getAll);
app.put('/api/products', products_controller.update);
app.delete('/api/products', products_controller.delete);







app.listen(SERVER_PORT, () => {
     console.log(`I am alivvee!!!!!! ${SERVER_PORT}`);
    });




    // In this step, we will create endpoints that will call the methods on our controller. We will also require our controller in index.js.

