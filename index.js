const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		fs.readFile(path.join(__dirname, "public/index.html"), (err, data) => {
			if (err) throw err;
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		});
	} else if (req.url === "/about") {
		fs.readFile(path.join(__dirname, "public/about.html"), (err, data) => {
			if (err) throw err;
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		});
	}
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
