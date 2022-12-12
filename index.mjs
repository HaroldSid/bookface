import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));

//connection to db
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("Connected to db!");
    app.listen(3000, () => console.log("Server Up and running"));
});


app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('todo.ejs');
});

app.post('/', (req, res) => {
    console.log(req.body.content);
});
