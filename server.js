import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from 'cors';
import { connectDB } from "./config/db.js";
import studentRouter from "./routes/students.js";
import subjectRouter from "./routes/subject.js";
import examRouter from "./routes/exam.js";
import resultRouter from "./routes/result.js";
import authRouter from "./routes/auth.js";
import cookieParser from 'cookie-parser';


const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/students", studentRouter);
app.use("/api/subject", subjectRouter);
app.use("/api/exam", examRouter);
app.use("/api/result", resultRouter);
app.use("/auth", authRouter);

connectDB();
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server Running on port 3000):$(process.env.port`);
});
