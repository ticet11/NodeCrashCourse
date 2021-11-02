const fs = require("fs");
const path = require("path");

// Check if directory exists
if (!fs.existsSync(path.join(__dirname, "/mkDirTest"))) {
	// Create folder
	fs.mkdir(path.join(__dirname, "/mkDirTest"), {}, (err) => {
		if (err) throw err;
		console.log("Created folder");
	});
}

// Create and write to file (overwrites)
fs.writeFile(path.join(__dirname, "/mkDirTest", "hello.txt"), "This is a test!", (err) => {
	if (err) throw err;
	else {
		console.log("Created file");
		// Write to file (appends)
		fs.appendFile(
			path.join(__dirname, "/mkDirTest", "hello.txt"),
			"\nWow, big fan of Node. Thanks. (rename overwrite test)",
			(err) => {
				if (err) throw err;
				console.log("Appended text to file.");
			}
		);

		// Check if file exists
		if (fs.existsSync(path.join(__dirname, "/mkDirTest/hello.txt"))) {
			// Read file
			fs.readFile(path.join(__dirname, "/mkDirTest/hello.txt"), "utf8", (err, data) => {
				if (err) throw err;
				else {
					console.log("\n\n// File Contents:\n");
					console.log(`"${data}"\n`);
					console.log("// End of File\n");

					// Rename file (overwrites any files with new name in the same directory)
					fs.rename(
						path.join(__dirname, "/mkDirTest/hello.txt"),
						path.join(__dirname, "/mkDirTest/fileManip.txt"),
						(err) => {
							if (err) throw err;
							else console.log("Renamed file.");
						}
					);
				}
			});
		}
	}
});
