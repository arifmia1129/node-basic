const express = require("express");
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})


app.get("/circle", (req, res) => {
    res.sendFile(__dirname + "/circle.html")
})


app.get("/triangle", (req, res) => {
    res.sendFile(__dirname + "/triangle.html")
})
app.post("/circle", (req, res) => {
    const { radius } = req.body;
    const area = Math.PI * radius * radius;
    res.send(`<h2>Area of the circle is: ${area}</h2>`)
})


app.post("/triangle", (req, res) => {
    const { base, height } = req.body;
    const area = 0.5 * base * height;
    res.send(`<h2>Area of the circle is: ${area}</h2>`)
})



app.listen(PORT, (req, res) => {
    console.log(`Server is running at http://localhost:${PORT}`)
})