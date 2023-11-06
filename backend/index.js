const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/UserRoute.routes.js"); 
const authRouters = require("./routes/auth.routes.js")

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use("/api/users", userRoutes);
app.use("/api/auth", authRouters);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
