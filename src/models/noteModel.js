const mongoose=require("mongoose");
//const { Product } = require("../Product");

const notesSchema={
            Image:String,
            Category:String,
            product_name:String,
            product_Brand_Name:String,
            Price:Number,
            Stock:Number,
            Discription:String
}
const Item=mongoose.model("Item",notesSchema);

module.exports=Item;