// const Person = require("./Person");

// const person1 = new Person("Brian Kozub", new Date("11/25/1993"));

// person1.greeting();

// Logger testing
const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => {
	console.log(`Called Listener => {\n    id: ${data.id},\n    message: \"${data.message}\",\n}`);
});

logger.log("Ho, yeah!");
