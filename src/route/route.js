const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render("dashboard");
})
router.get("/food_catagory",(req,res)=>{
    res.render("food_catagory");
})

router.get("/food",(req,res)=>{
    res.render("food");
})

router.get("/orders",(req,res)=>{
    res.render("orders");
})

router.get("/payment",(req,res)=>{
    res.render("payment");
})

router.get("/users",(req,res)=>{
    res.render("users");
})

router.get("/admin_manager",(req,res)=>{
    res.render("admin_manager");
})

router.get("/add_food",(req,res)=>{
    res.render("add_food");
})

router.post("/add_food",(req,res)=>{
    console.log(req.body)
res.send(req.body);
})

module.exports= router