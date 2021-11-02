const os = require("os");

// Which platform is running?
// returns 'win32' for all Windows, 'Darwin' for Mac, 'Linux', etc.
console.log(os.platform());

// CPU Arch
// 'x86' vs 'x64', etc.
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory (returned in bytes)
console.log(`${os.freemem() / 1024 ** 3} gigs`);

// Total memory (returned in bytes)
console.log(`${os.totalmem() / 1024 ** 3} gigs`);
15.935901641845703;

// Home dir for current user
console.log(os.homedir());

// Uptime for system in seconds
console.log(os.uptime());
