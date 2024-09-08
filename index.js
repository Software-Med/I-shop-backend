const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let Products;

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).redirect("/api/products")
});

app.get("/api/products", (req, res) => {
    fetch("https://dummyjson.com/products")
  .then(result => result.json())
  .then((data) => {
   Products = data.products
   res.json(Products)
   console.log("sent")
})
.catch(err => console.log(err))
});
app.listen(port, () => {
  console.log(`App is listening on port ${port}...`)
})
module.exports = app
