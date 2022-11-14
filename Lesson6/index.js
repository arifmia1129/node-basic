const fs = require("fs");
const http = require("http");
const PORT = 5000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
    const handleReadFile = (filePath, status) => {
        fs.readFile(filePath, (err, data) => {
            res.writeHead(status, { "content-type": "text/html" })
            res.write(data);
            res.end()
        })
    }

    if (req.url === "/") {
        handleReadFile("./views/index.html", 200)
    }
    else if (req.url === "/contact") {
        handleReadFile("./views/contact.html", 200)
    }
    else if (req.url === "/about") {
        handleReadFile("./views/about.html", 200)
    }
    else {
        handleReadFile("./views/error.html", 200)
    }

})

server.listen(PORT, hostname, () => {
    console.log(`Server is running at http://${hostname}:${PORT}`)
})