const express = require("express"); // import express
const mongoose = require("mongoose"); // import mongoose

const app = express();

(async function connect() {
  await mongoose.connect("mongodb://localhost/users");
  console.log("connected");
})().catch((err) => console.log(err));

app.use(express.json());
// middleware to get to our router, middleware doesn't allow the req to go beyond it, hence improves safety

const userROuter = require("./routers/users");
app.use("/users", userROuter);

app.listen(8000, () => {
  console.log("listening to port 8000");
});
