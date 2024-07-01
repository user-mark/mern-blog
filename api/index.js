import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Q3dIgYhMXHIzW5wg
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// app.get()

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
