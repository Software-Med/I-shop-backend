const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let Products;

fetch("https://dummyjson.com/products")
.then(res => res.json())
.then((data) => {
  Products = data.products
  app.listen(port, () => {
  console.log(`App is listening on port ${port}...`)
})
})
.catch(err => console.log(err))

const port = process.env.PORT || 4000;

app.get("/api/products", (req, res) => {
  if (Products) {
    res.json(Products)
  }
});

module.exports = app
