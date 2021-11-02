const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
	log(message) {
		// Call Event
		this.emit("message", {
			id: uuid.v4(),
			message,
		});
	}
}

module.exports = Logger;
