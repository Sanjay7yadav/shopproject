import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Delete=() =>{

    
    const [addProduct,setProduct] = useState(
        {
            Category:"",
            product_name:"",
            product_Brand_Name:"",
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

        setProduct({Category:"", product_name:"",product_Brand_Name:""});
    }
    const update=()=>
    {
        alert("Product Deleted");
    }
    return(
    <>
    <br/>
    <div className="container">
    
    <h2 className="text-danger">Delete Product</h2>
    <form action="" onSubmit={handleSubmit}>
        <div >
            <label className="label" htmlFor="Category">Category</label>
            <br/>
            <input className="input1" type="text" value={addProduct.Category}
             onChange={handleInput} name="Category" id="Category" required></input>
        </div>
        <div >
            <label className="label" htmlFor="product_name">Product Name</label>
            <br/>
            <input className="input1" type="text" value={addProduct.product_name}
             onChange={handleInput} name="product_name" id="product_name" required></input>
        </div>
        <div >
            <label className="label" htmlFor="product_Brand_Name">Product Brand Name</label>
            <br/>
            <input className="input1" type="text" value={addProduct.product_Brand_Name}
             onChange={handleInput} name="product_Brand_Name" id="product_Brand_Name" required></input>
        </div>
        <br/>
    <button className="btn btn-success" type="submit" onClick={()=>{update()}}>Delete</button>
    </form>
</div>

    <div className="row">
        {
            records.map( (curElem)=>{
                return(
                    <div className="col">
                    <p> {curElem.Category}</p>
                    <p> {curElem.product_name}</p>
                    <p> {curElem.product_Brand_Name}</p>
                    </div>
                )
            }

            )
        }
    </div>
    </>
    );
};
export default Delete;