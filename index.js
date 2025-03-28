const express = require("express");
const PORT = 9001;
const userRouter = require('./routes/user')
const {connectMongoDb} = require("./connection")

const app = express();

//Connect MongoDB
connectMongoDb("mongodb://127.0.0.1:27017/mvp-mongo")
.then(()=>console.log("MongoDB connected..."))
.catch(error => console.log("Coudn't connect"))

//Middleware to parse form data
app.use(express.urlencoded({extended: false}));

//Routes
app.use("/user", userRouter);

app.listen(PORT, ()=> console.log(`port ${PORT} is running...`));









