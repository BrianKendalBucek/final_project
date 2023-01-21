const express = require("express");
const app = express();
// add bodyparser
// add express.static to serve up the static files from the public directory(only for mono repo)
// cors
// proxy goes into the front end


app.use("/users/", require("./routes/usersRoute"));

app.listen(3001, function() {
  console.log("express server is running on port 3001");
})