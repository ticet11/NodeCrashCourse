const http = require("http");

// Create server obj
http.createServer((req, res) => {
	// Write response
	res.write("Server created");
	res.end();
}).listen(5000, () => console.log("Server listening on port 5000..."));
