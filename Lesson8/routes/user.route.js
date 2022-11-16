const express = require("express");
const router = express.Router();


router.get("/register", (req, res) => {
    res.send("<h1>This is register page</h1>")
})

router.get("/login", (req, res) => {
    res.send("<h1>This is login page</h1>")
})


module.exports = router;