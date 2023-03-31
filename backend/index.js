const express = require("express");
const connecToMongo = require("./db");


connecToMongo();
const app = express();
const port = 5000;

//configure CORS
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin',"*");
  //line above  will only make GET possible in case of CORS issue

  res.setHeader('Access-Control-Allow-Methods',"*");
  //line abovewill make GET/POST/PUT/DELETE possible in case of CORS 

  res.setHeader('Access-Control-Allow-Headers',"*");
  //line abovewill make getting authorization etc headers possible in cors
  
  next();
})

//middlewear
app.use(express.json());

//Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use('/api/notes',require('./routes/notes'))



app.get("/", (req, res) => {
  res.send("Hello World"); 
  next();
});

app.listen(port, () => {
  console.log(`MereKeeps Backend listening at ${port}`);
});
