const myUrl = new URL("http://projects.wiltingdaisy.com:8080/98timer?id=102&dep=radiology");

// Serialized URL
console.log("\n" + myUrl.href);
console.log(myUrl.toString() + "\n");
// http://projects.wiltingdaisy.com:8080/98timer?id=102&dep=radiology

// Host (root domain)
console.log(myUrl.host);
// projects.wiltingdaisy.com:8080

// Hostname
// Same as Host, without port
console.log(myUrl.hostname + "\n");
// projects.wiltingdaisy.com

// Pathname
console.log(myUrl.pathname + "\n");
// /98timer

// Serialized query
console.log(myUrl.search);
// ?id=102&dep=radiology

// Params object
console.log(myUrl.searchParams);
// URLSearchParams { 'id' => '102', 'dep' => 'radiology' }

// Add param
myUrl.searchParams.append("snack", "bread");
console.log(myUrl.searchParams);
// URLSearchParams { 'id' => '102', 'dep' => 'radiology', 'snack' => 'bread' }

// Loop through params
myUrl.searchParams.forEach((value, key) => {
	console.log(`${key}: ${value}`);
});
// id: 102
// dep: radiology
// snack: bread
