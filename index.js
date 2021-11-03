const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
	let reqUrl;
	switch (req.url) {
		case "/":
			reqUrl = path.join(__dirname, "public/index.html");
			break;
		case "/about":
			reqUrl = path.join(__dirname, "public/about.html");
			break;
		default:
			reqUrl = path.join(__dirname, "public/error.html");
			break;
	}

	fs.readFile(reqUrl, (err, data) => {
		if (err) throw err;
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(data);
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
