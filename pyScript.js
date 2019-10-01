/*

Auth: Nate Koike
Proj: Running Python in Node
Desc: run a simple python script from within node

*/

const express = require("express");
const fs = require("fs");
const { execSync } = require("child_process"); // enable command running

const app = express();

// run this with nodemon to keep the port open
app.listen(3000, console.log("listening on port 3000"));

app.get("/", (req, res) => {
  // run python script syncronously
  execSync("python gen_fil.py", (err, stdout, stderr) => {
    if (err) console.log(err);
  });

  fs.readFile("name.txt", "utf8", (err, contents) => res.send(contents));
});
