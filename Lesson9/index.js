const express = require("express");
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    const { name, roll } = req.query;
    res.send(`Student: ${name}, Roll: ${roll}`)
})

app.post("/user", (req, res) => {
    res.json(req.body);
    console.log(req.body);
})

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/user/userId/:id/userAge/:age", (req, res) => {
    const { id, age } = req.params;
    const name = req.header("name");
    const phone = req.header("phone");
    console.log(name, phone)
    res.send(`id: ${id}, age:${age}`)
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})