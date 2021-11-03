const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
	let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
	let extName = path.extname(filePath);
	let contentType = "text/html";
	let jsonData;

	switch (extName) {
		case ".js":
			contentType = "text/javascript";
			break;
		case ".css":
			contentType = "text/css";
			break;
		case ".png":
			contentType = "image/png";
			break;
		case ".jpg":
		case ".jpeg":
			contentType = "image/jpg";
			break;
		case "":
			filePath.includes("api")
				? ((filePath += ".json"), (contentType = "application/json"))
				: (filePath += ".html");
			break;
		default:
			break;
	}

	fs.readFile(filePath, (err, data) => {
		if (err) {
			if (err.code === "ENOENT") {
				// Page not found
				fs.readFile(path.join(__dirname, "public", "error.html"), (err, data) => {
					res.writeHead(200, { "Content-Type": "text/html" });
					res.end(data, "utf8");
				});
			} else {
				// Server Error
				res.writeHead(500);
				res.end(`Server Error: ${err.message}`);
			}
		} else {
			res.writeHead(200, { "Content-Type": contentType });
			res.end(data, "utf8");
		}
	});
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
	console.log("Server listening on port " + PORT);
});

// // Logger testing
// const Logger = require("./logger");

// const logger = new Logger();

// logger.on("message", (data) => {
// 	console.log(`Called Listener => {\n    id: ${data.id},\n    message: \"${data.message}\",\n}`);
// });

// logger.log("Ho, yeah!");

// const Person = require("./Person");

// const person1 = new Person("Brian Kozub", new Date("11/25/1993"));

// person1.greeting();
