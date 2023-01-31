const express = require("express");
const connecToMongo = require("./db");

connecToMongo();
const app = express();
const port = 5000;

//middlewear
app.use(express.json());

//Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use('/api/notes',require('./routes/notes'))

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});