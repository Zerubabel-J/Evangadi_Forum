const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  user: "ForemAdmin",
  database: "EvangadiForem",
  host: "localhost",
  password: "Afford@04",
  connectionLimit: 10,
});

module.exports = dbConnection.promise();
