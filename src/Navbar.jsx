import React from 'react'
import {NavLink} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Navbar =() =>{
return (
    <>
    <div className="flex-container">
        <div >
        <NavLink exact  className="btn btn-success" to="/">About</NavLink>
        </div>
        <div >
        <NavLink exact  className="btn btn-success" to='/product'>Product</NavLink>
        </div>
        <div >
        <NavLink exact  className="btn btn-success" to='/update'>Update</NavLink>
        <br/>
        </div>
        <div >
        <NavLink exact  className="btn btn-success" to='/delete'>Delete </NavLink>
        </div>
        <div >
        <NavLink exact  className="btn btn-success" to='/view'>View </NavLink>
        </div>
        <div >
        <NavLink exact  className="btn btn-success" to='/statistic'>Statistic </NavLink>
        </div>
    </div>
    </>
);
};

export default Navbar;