const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const food = require('./data/foods.json')

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Foods is running')

});

app.get('/foods', (req, res) =>{
    res.send(food);
})

app.get('/foods/:id', (req, res) =>{
    const id = req.params.id;
    const chef = food?.find((item) => item.id === parseInt(id))
    res.send(chef);
    console.log(chef)
})

app.listen(port, () =>{
    console.log(`foods api is running on port: ${port}`)
})