// installing request library
const request = require('request');
// requiring node's fs module to write to file 
const fs = require('fs');

// storing commandline inputs in variables 
let url = process.argv[2];
let localPath = process.argv[3];
console.log(process.argv);


// making http request 
// takes url as first argument. 
// takes callback function as second argument once the url is read?
request(url, (error, response, body) => {
  if (error) {
    // if there is something wrong with the request, console logs the error
    console.log('Failed request', error);
  }

  // takes the file retrived from the url to write it to the localPath (in this case index.html file)
  fs.writeFile(localPath, body, (err) => {
    // if there an error, console logs error and fail message. 
    // the function then terminates
    if (err) {
      console.error('Failed to write to local path', err)
      return
    }
    // if the file is successfully written to index.html, console logs success message
    else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath} `)
    }
  })
});


// does fs.writeFile always create a new file if the file does not already exist 
// when does the new file get created?
// if the fs.writeFile fails, does anything get written to the filePath?
// what does the response parameter do?