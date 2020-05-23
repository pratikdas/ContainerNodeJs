const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const axios = require('axios');

const app = express();

const port = process.env.port || 3001;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/catalog/:productName', (req, res) => {
    let prodName = req.params['productName'];
    
    fetchInventory(prodName, req, res);
    
});

app.listen(port, ()=>{
    console.log(`Catalog Application listening on ${port}`);
});

async function fetchInventory(prodName, req, res){
    let apiResp = await axios.get('http://localhost:3000/inventory/Television');

    let data = apiResp.data;
    console.log(data);
    let catalogItem = {
        productName : data.productName,
        numItemsInStock: data.numItemsInStock
    };
    res.send(catalogItem);
}
