import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";

dotenv.config({
  path: "./.env",
});

const app = express();

// Middleware to read JSON body
app.use(express.json());

// Routes
app.use("/api/v1/users", userRouter);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!!", err);
  });
