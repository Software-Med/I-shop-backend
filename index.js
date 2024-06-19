const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let Products = [];

fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => Products = data.products)
.catch(err => console.log(err))

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}...`)
});

app.get("/api/products", (req, res) => {
  res.json(Products)
});