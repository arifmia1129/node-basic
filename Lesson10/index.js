const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;


app.get("/products/:id([0-9]{3})", (req, res) => {
    res.send(`<h2>Your searched product id: ${req.params.id}`)
})
app.get("/products/:title([a-zA-z0-9]+)", (req, res) => {
    res.send(`<h2>Your searched product title: ${req.params.title}`)
})

app.use("*", (req, res) => {
    res.status(400).json({
        message: "Sorry can't found this route"
    })
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running at http://localhost:${PORT}`);
})