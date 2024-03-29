const dbConnection = require("../db/dbConfig");
const { StatusCodes } = require("http-status-codes");

// Insert the question into the database
async function askquestion(req, res) {
  const { title, description } = req.body;
  const userId = req.user.userid;
  try {
    const result = await dbConnection.query(
      "INSERT INTO questions (questionid, userid, title, description, tag) VALUES (?, ?, ?, ?, ?)",
      [generateQuestionId(), userId, title, description, title]
    );
    console.log(
      "INSERT INTO questions (questionid, userid, title, description, tag) VALUES (?, ?, ?, ?, ?)",
      [generateQuestionId(), userId, title, description, title]
    );

    if (result.affectedRows) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: "Failed to ask the question" });
    } else {
      return res.status(StatusCodes.CREATED).json({ msg: "Question asked" });
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong, try again" });
  }
}

// Function to generate a unique question ID
function generateQuestionId() {
  // const timestamp = new Date().getTime();
  const randomNumber = Math.floor(Math.random() * 100);
  const uniqueId = parseInt(`${randomNumber}`);
  return uniqueId;
}

// red all question
async function readAllQuestion(req, res) {
  const readAllQuestion = `SELECT * FROM questions ORDER BY id DESC`;

  try {
    const connection = await dbConnection.getConnection();
    const [result] = await connection.query(readAllQuestion);
    connection.release();
    res.json({ task: result });
    res.send("all question");
  } catch (err) {
    res.send(err.message);
  }
}

// read single question
async function readQuestion(req, res) {
  const id = req.params.id;
  const readQuestion = `SELECT * FROM questions WHERE id='${id}'`;

  try {
    const [result] = await dbConnection.query(readQuestion);

    if (result.length === 0) {
      return res.send(`No question with this id ${id}`);
    } else {
      return res.json(result);
    }
  } catch (error) {
    return res.send(error.message);
  }
}
// edit single question
async function editQuestion(req, res) {
  const id = req.params.id;
  const { title, description } = req.body;

  if (!description) {
    return res.send("question is required");
  }

  const updateQuestion = `UPDATE questions SET description="${description}", title="${title}" WHERE id=${id}`;

  try {
    const [result] = await dbConnection.query(updateQuestion);

    if (result.affectedRows == 0) {
      return res.send(`No question with id ${id}`);
    } else {
      return res.json("Question updated");
    }
  } catch (err) {
    return res.send(err.message);
  }
}
// Delete single task
async function deleteQuestion(req, res) {
  const id = req.params.id;
  const deleteQ = `DELETE FROM questions WHERE id = ${id}`;

  try {
    await dbConnection.query(deleteQ);
    return res.json("Question deleted");
  } catch (err) {
    return res.send(err.message);
  }
}
module.exports = {
  askquestion,
  readAllQuestion,
  readQuestion,
  editQuestion,
  deleteQuestion,
};
