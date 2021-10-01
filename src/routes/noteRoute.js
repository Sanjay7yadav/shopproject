const express = require("express");
const router = express.Router();
const Item = require("../models/noteModel");

router.route("/product").post((req,res)=>{
    const Image=req.body.Image;
    const Category=req.body.Category;
    const product_name=req.body.product_name;
    const product_Brand_Name=req.body.product_Brand_Name;
    const Price=req.body.Price;
    const Stock=req.body.Stock;
    const Discription=req.body.Discription;

    const addNewproduct=new Item({
        Image,
        Category,
        product_name,
        product_Brand_Name,
        Price,
        Stock,
        Discription
    });

    addNewproduct.save();
    
})

router.route("/view").get((req,res)=>{
    Item.find()
            .then(foundproduct=>res.json(foundproduct))
})

module.exports=router;