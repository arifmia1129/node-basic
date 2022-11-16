const express = require("express");
const app = express();
const userRouter = require("./routes/user.route.js");


app.use("/api/user", userRouter);


app.use("/register", (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/register.html")
})

app.use("/login", (req, res) => {
    // res.cookie("name", "binu");
    // res.cookie("age", "20");

    // res.clearCookie("age")
    res.append("id", "112864");
    res.end();
})

app.use("/", (req, res) => {
    res.status(200).json({
        route: "Home",
        message: "Successfully running server",
        statusCode: 200
    })
})

app.use((req, res) => {
    res.send("<h1>404! Can't found your requested route</h1>")
})


module.exports = app;