import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDB } from "./config/db.js";
import studentRouter from "./routes/students.js";
import subjectRouter from "./routes/subject.js";
import examRouter from "./routes/exam.js";


const app = express();
app.use(express.json());
app.use("/api/students", studentRouter);
app.use("/api/subject", subjectRouter);
app.use("/api/exam", examRouter);


connectDB();
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server Running on port 3000):$(process.env.port`);
});
