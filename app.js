require("./config/config");
require("./models/db");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/user.router");
const productRoutes = require("./routes/product.router");
var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/api", userRoutes);
app.use("/api/product", productRoutes);

// start server
app.listen(process.env.PORT, () =>
  console.log(`Server started at port : ${process.env.PORT}`)
);
