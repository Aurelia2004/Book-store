const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();


//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router) //localhost:5000/books

mongoose
.connect(
    "mongodb+srv://admin:LTMXcLy1vETOmEP1@cluster0.2mdmw.mongodb.net/Book-store1"
    )
.then(()=>console.log("Connected to Database"))
.then(()=>{
        app.listen(5000);
})
.catch((err)=>console.log(err));




//LTMXcLy1vETOmEP1