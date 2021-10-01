import { PromiseProvider } from 'mongoose';
import React,{useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  
import { update } from './models/noteModel';

const View=() =>{

    const [products,setProducts]= useState([{
        _id:'',
        Image:'',
            Category:'',
            product_name:'',
            product_Brand_Name:'',
            Price:'',
            Stock:'',
            Discription:''
    }])

    useEffect(()=>{
        fetch("/view").then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setProducts(jsonRes));
    })
function Edit(id)
{
    console.log(id);
    //props.history.push("/update"+id)
    
}
    return<div className='container'>
            <h1>Items</h1>
            {products.map(pro =>
            <tr key={pro.product_name}>
                {/* <td>{pro._id}</td> */}
                <td>{pro.Image}</td>
                <td>{pro.Category}</td>
                <td>{pro.product_name}</td>
                <td>{pro.product_Brand_Name}</td>
                <td>{pro.Price}</td>
                <td>{pro.Stock}</td>
                <td>{pro.Discription}</td>
                <td><button onClick={()=>Edit(pro._id)} className="btn btn-success">Update</button></td>
                <td><button  className="btn btn-danger">Delete</button></td>
            </tr>)}
            
        </div>
    

}
export default View;