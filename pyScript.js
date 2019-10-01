/*

Auth: Nate Koike
Proj: Running Python in Node
Desc: run a simple python script from within node

*/

const request = require("request");
const express = require("express");
const fs = require("fs");
const { exec } = require('child_process'); // enable command running

const app = express();



// run this with nodemon to keep the port open
app.listen(3000, console.log("listening on port 3000"));

app.get("/", (req, res) => {
  // run a command
  exec("python gen_fil.py", (err, stdout, stderr) => {
    if (err) console.log(err); // node couldn't run the command
  });

  setTimeout(() => {
    // send the contents of the file
    fs.readFile('name.txt', 'utf8', function(err, contents) {
      res.send(contents);
    });}, 100);

  console.log("done");
});
