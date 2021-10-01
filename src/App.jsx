import React from 'react'
import { Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Product from './Product';
import Navbar from './Navbar';
import Update from './Update';
import Delete from './Delete';
import Statistic from './Statistic';
import View from './View';

const App=() =>{
return (
  <>
  <div className="admin"> 
  
  <h1 className="text-center">ADMIN PANEL</h1>
  <Navbar/>
  <Switch>
 <Route  exact path='/' component={About}/>
 <Route path='/product' component={Product} />
 <Route path='/update' component={Update} />
 <Route path='/delete' component={Delete} />
 <Route path='/view' component={View} />
 <Route path='/statistic' component={Statistic} />
  </Switch>
  </div>
  </>
);
};
export default App