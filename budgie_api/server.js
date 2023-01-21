const express = require("express");
const app = express();
// add bodyparser
// cors
// proxy goes into the front end, currently set in the backend.. afraid to touch rn lol


app.use("/users/", require("./routes/usersRoute"));

app.listen(3001, function() {
  console.log("express server is running on port 3001");
})