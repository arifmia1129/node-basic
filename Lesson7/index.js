const http = require("http");
const fs = require("fs");
const PORT = 5000;
const hostName = "127.0.0.1";


const server = http.createServer((req, res) => {
    const handleFileRead = (filePath, status) => {
        fs.readFile(filePath, "utf-8", (err, data) => {
            res.writeHead(status, { "content-type": "text/html" })
            res.write(data);
            res.end();
        })
    }
    if (req.url === "/") {
        handleFileRead("./files/index.html", 200)
    }
    else if (req.url === "/contact") {
        handleFileRead("./files/contact.html", 200)
    }
    else if (req.url === "/about") {
        handleFileRead("./files/about.html", 200)
    }
})

server.listen(PORT, hostName, () => {
    console.log(`Server is running at http://${hostName}:${PORT}`);
})