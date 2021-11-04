# Node Crash Course

Oh, no! I have to learn Node! Thanks, [Traversy Media](https://youtu.be/fBNz5xF-Kx4).

This is a simple server, built with Node.js, featuring some static HTML pages and styles and a single API endpoint.

## Pages and Endpoints

- [/](https://bk-nodecrashcourse.herokuapp.com/) - Home page
- [/about](https://bk-nodecrashcourse.herokuapp.com/about) - About page
- [/error](https://bk-nodecrashcourse.herokuapp.com/error) - Custom 404 page (should be triggered by any unknown path)
- [/api/people](https://bk-nodecrashcourse.herokuapp.com/api/people) - Returns a small collection of people

## Modules Used

### Included with Node

1. [Events](https://nodejs.org/api/events.html#events) - create, fire, and listen for events
2. [File system](https://nodejs.org/api/fs.html#file-system) - enables interacting with the file system
3. [HTTP](https://nodejs.org/api/http.html#http) - allows Node.js to transfer data over HTTP
4. [OS](https://nodejs.org/api/os.html#os) - provides operating system-related utility methods and properties
5. [Path](https://nodejs.org/api/os.html#os) - provides utilities for working with file and directory paths
6. [URL](https://nodejs.org/api/url.html#url) - provides utilities for URL resolution and parsing

### External Packages

1. [nodemon](https://www.npmjs.com/package/nodemon) - automatically restarts application when file changes are detected. (Used in development)
2. [uuid](https://www.npmjs.com/package/uuid) - creates RFC4122 UUIDs

## Running Locally

If, for some reason, you want to run this on your own machine (assuming you already have [Node](https://nodejs.dev/) and [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed):

1. Clone this repo to a folder of your liking.

   `$ git clone https://github.com/ticet11/NodeCrashCourse`

2. Install necessary packages.

    `$ npm install'

3. Run the project (running in development mode will use nodemon, explained above)

    `$ npm run start` OR 
    `$ npm run dev`