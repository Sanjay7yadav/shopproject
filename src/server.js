const express =require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose

mongoose.connect("mongodb+srv://sanjay-yadav:jnv1012@cluster0.utyxx.mongodb.net/shoppingproject")

//require route
app.use("/",require("./routes/noteRoute"));

app.listen(3001,function()
{
    console.log('Running on 3001');
});