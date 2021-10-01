import React, { useState } from 'react'
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Update=() =>{

    const [addProduct,setProduct] = useState(
        {
            Image:"",
            product_name:"",
            product_Brand_Name:"",
            Price:"",
            Stock:"",
            Discription:""
        }
    );

    const [records,setRecords]=useState([]);

    const handleInput =(e)=>{
        const name =e.target.name;
        const value=e.target.value;
        console.log(name,value);

        setProduct({...addProduct,[name]:value})
    }

    const handleSubmit =(e) =>{
        e.preventDefault();

        const newRecord ={...addProduct, id:new Date().getTime().toString()}

        setRecords([...records, newRecord]);

        setProduct({Image:"",product_name:"",product_Brand_Name:"",Price:"",Stock:"",Discription:""});
    }
    const del=()=>
    {
        alert("Product Updated");
    }
    return(
    <>
    <br/>
    <div className="container">
    
    <h2 >Update Product</h2>
    <form action="" onSubmit={handleSubmit}>
        <div >
            <label className="label" htmlFor="Image">Update Image</label>
            <br/>
            <input className="input1" type="file"  value={addProduct.Image}
               onChange={handleInput} name="Image" id="Image"></input>
        </div>
        <div >
            <label className="label" htmlFor="product_name"> Update Product Name</label>
            <br/>
            <input className="input1" type="text" value={addProduct.product_name}
             onChange={handleInput} name="product_name" id="product_name"></input>
        </div>
        <div >
            <label className="label" htmlFor="product_Brand_Name">Product Brand Name</label>
            <br/>
            <input className="input1" type="text" value={addProduct.product_Brand_Name}
             onChange={handleInput} name="product_Brand_Name" id="product_Brand_Name"></input>
        </div>
        <div >
            <label className="label" htmlFor="Price">Update Price</label>
            <br/>
            <input className="input1" type="number" value={addProduct.Price} 
            onChange={handleInput} name="Price" id="Price"></input>
        </div>
        <div >
            <label className="label" htmlFor="Stock"> Update Stock</label>
            <br/>
            <input className="input1" type="number" value={addProduct.Stock} 
            onChange={handleInput} name="Stock" id="Stock"></input>
        </div>
        <div >
            <label className="label" htmlFor="Discription">Discription</label>
            <br/>
            <input className="dis" type="text" value={addProduct.Discription} 
            onChange={handleInput} name="Discription" id="Discription"></input>
        </div>
        <br/>
    <button className="btn btn-success" type="submit" onClick={()=>{del()}}>Update Product</button>
    </form>
</div>

    <div className="row">
        {
            records.map( (curElem)=>{
                return(
                    <div className="col">
                    <p> <img src ={curElem.Image}></img></p>
                    <p> {curElem.product_name}</p>
                    <p> {curElem.product_Brand_Name}</p>
                    <p> {curElem.Price}</p>
                    <p> {curElem.Stock}</p>
                    <p> {curElem.Discription}</p>
                    </div>
                )
            }

            )
        }
    </div>
    </>
    );
};
export default Update;