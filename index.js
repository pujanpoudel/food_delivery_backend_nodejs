const express = require('express');
const path  = require('path');
const Route = require('./src/route/route');





const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/admin',Route );

app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views",path.resolve("./src/view"));




app.get('/',(req,res)=>{
    res.render("dashboard");
});

app.listen(3000,()=>{
console.log("server running in port 3000")
})