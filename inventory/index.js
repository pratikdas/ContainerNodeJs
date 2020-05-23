const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = process.env.port || 3000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/inventory/:productName', (req, res) => {
    let inventoryItem = {
        productName : req.params['productName'],
        numItemsInStock: 43
    };
    res.send(inventoryItem);
});

app.listen(port, ()=>{
    console.log(`Application listening on ${port}`);
});
