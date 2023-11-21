import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

let task = [];

app.get("/", (req,res) => {
    res.render("index.ejs", {task:task});
});

app.post("/addtask", (req,res) => {
    task.push(req.body.newTask);
    res.redirect("/"); 
});


app.post("/removetask", (req, res) => {
    task.splice(task.indexOf(req.body.taskId), 1);
    res.redirect("/");
})
^


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

