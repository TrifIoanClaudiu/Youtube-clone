import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from  "./routes/users.js"
import videosRoutes from "./routes/videos.js"
import commentsRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
app.use(
  cors({
      credentials: true,
      origin: "http://localhost:3000",
  })
);
const connect = () => {
    mongoose
      .connect(process.env.DB_CONNECT)
      .then(() => {
        console.log("Database connection is successfull");
      })
      .catch((err) => {
        throw err;
      });
  };

app.use(cookieParser());  
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/videos", videosRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(8800, () => {
    connect();
    console.log("Server is running on port 8800");
})