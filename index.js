require('./models/db');
const express = require("express")
const app = express()
const port = 5000
const path = require("path")
const { stringify } = require("querystring");


const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const employeeController = require('./controller/employeeController')


const Handlebars = require('handlebars')
const hbs = require('express-handlebars');
const exphbs = require('express-handlebars');


//connecting mongodb


const bodyparser = require("body-parser")

//adding css
app.use(bodyparser.urlencoded({
    extended: true
}));


app.use(bodyparser.json());
let saticpath = path.join(__dirname, "views")
app.use(express.static(saticpath))
app.use(express.urlencoded())//isko lagana bahut jaruri h
app.use(express.json())
app.use(express.urlencoded({ extented: false }))

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layout/',handlebars: allowInsecurePrototypeAccess(Handlebars) }));
app.set('view engine', 'hbs');

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
})
app.get("/cor",(req,res)=>{
    res.sendFile(path.join(__dirname, "cor.html"))
})
app.get("/course",(req,res)=>{
    res.sendFile(path.join(__dirname, "course.html"))
})
app.get("/c1",(req,res)=>{
    res.sendFile(path.join(__dirname, "c1.html"))
})
app.get("/c2",(req,res)=>{
    res.sendFile(path.join(__dirname, "c2.html"))
})
app.get("/calender",(req,res)=>{
    res.sendFile(path.join(__dirname, "calender.html"))
})
app.get("/c3",(req,res)=>{
    res.sendFile(path.join(__dirname, "c3.html"))
})
app.get("/c4",(req,res)=>{
    res.sendFile(path.join(__dirname, "c4.html"))
})
app.get("/c5",(req,res)=>{
    res.sendFile(path.join(__dirname, "c5.html"))
})
app.get("/c6",(req,res)=>{
    res.sendFile(path.join(__dirname, "c6.html"))
})
app.get("/c7",(req,res)=>{
    res.sendFile(path.join(__dirname, "c7.html"))
})

app.get("/post1",(req,res)=>{
    res.sendFile(path.join(__dirname, "post1.html"))
})
app.get("/post1c",(req,res)=>{
    res.sendFile(path.join(__dirname, "post1c.html"))
})
app.get("/post2",(req,res)=>{
    res.sendFile(path.join(__dirname, "post2.html"))
})
app.get("/post3",(req,res)=>{
    res.sendFile(path.join(__dirname, "post3.html"))
})
app.get("/post4",(req,res)=>{
    res.sendFile(path.join(__dirname, "post4.html"))
})
app.get("/post5",(req,res)=>{
    res.sendFile(path.join(__dirname, "post5.html"))
})
app.get("/post6",(req,res)=>{
    res.sendFile(path.join(__dirname, "post6.html"))
})
app.get("/post7",(req,res)=>{
    res.sendFile(path.join(__dirname, "post7.html"))
})
app.get("/point", (req, res) => {
    res.sendFile(path.join(__dirname, "post1c.html"))

})


app.listen(port, () => {
    console.log("working");
})


app.use('/employee', employeeController);
