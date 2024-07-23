const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const itemRoutes = require("./routes/items");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// dotenv.config();

if (process.env.NODE_ENV !== "production") {
  // configuring environment
  dotenv.config();
}
const port = process.env.PORT || 3000;
const connectionString = process.env.CONNECTION;
const DB = connectionString;
 
if (process.env.NODE_ENV === "production") {
  console.log("Running in production mode.");
} else if (process.env.NODE_ENV === "development") {
  console.log("Running in development mode.");
} else if (process.env.NODE_ENV === "testing") {
  console.log("Running in testing mode.");
} else {
  console.log("Environment mode is not set or is unknown.");
}

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });
app.use(bodyParser.json());

app.use("/items", itemRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});
