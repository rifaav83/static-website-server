const http = require("http");
const fs = require("fs");
const path = require("path");
const mime = require("mime");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = process.env.PUBLIC_DIR || "./public";

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, PUBLIC_DIR, req.url === "/" ? "index.html" : req.url);

  
  if (!filePath.startsWith(path.join(__dirname, PUBLIC_DIR))) {
    res.writeHead(403, { "Content-Type": "text/plain" });
    return res.end("Access Forbidden");
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("404 - Not Found");
    }

    res.writeHead(200, { "Content-Type": mime.getType(filePath) });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
