const express = require("express");
const app = express();
const port = 5500;

// db connection
const dbConnection = require("./db/dbConfig");

// user routes middleware file
const userRoutes = require("./routes/userRouts");
const questionRoutes = require("./routes/questionRouter");
const answerRoutes = require("./routes/answerRouter");

// authMiddleware
const authMiddleware = require("./middleweare/authMiddleware");

// json middleware to extract json data
app.use(express.json());

// user routes middleware
app.use("/api/users", userRoutes);

// question routes middleware
app.use("/api/questions", authMiddleware, questionRoutes);

// answer routes middleware
app.use("/api/answers", authMiddleware, answerRoutes); // Corrected middleware path

async function start() {
  try {
    const result = await dbConnection.execute("select 'test' ");
    await app.listen(port);
    console.log(`listening on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();
