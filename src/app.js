const mongoose = require('mongoose')
const express = require("express");
const bodyParser = require("body-parser");
const roomRouter = require("./routes/room");
const userRouter = require("./routes/user");
const app = express();
const port = 8080;

mongoose.connect('mongodb://localhost:27017/db', {
  useNewUrlParser : true,
  useUnifiedTopology : true
})

const db = mongoose.connection;
db.once('open', function(){
  console.log("DB connected!")
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use("/room", roomRouter);
app.use("/user", userRouter);

app.listen(port, "0.0.0.0", () => {
    console.log(`Listening on port ${port}`);
});
