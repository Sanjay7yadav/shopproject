import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ResponsiveContainer,LineChart,Line,XAxis,YAxis,CartesianGrid, Legend,Tooltip} from 'recharts';

const pdata=[
    {
        category:'Men',
        Total_Item:200,
        Sold:80,
        Available:200-80
    },
    {
        category:'Women',
        Total_Item:180,
        Sold:120,
        Available:170-150
    },
    {
        category:'Kids',
        Total_Item:170,
        Sold:50,
        Available:170-50
        
    },
    {
        category:'electronic',
        Total_Item:200,
        Sold:120,
        Available:200-120
    },
    {
        category:'Fruits- and Vegetables',
        Total_Item:190,
        Sold:130,
        Available:190-130
        
    },
    {
        category:'Home Care',
        Total_Item:150,
        Sold:50,
        Available:150-50
        
    },
    
];
const Statistic=()=>{
    return(
        <>
        <div className="p-3 mb-2 bg-light">
        <div className="container-fluid">
        <h2 className="text-center"> STATISTIC</h2>
        </div>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} width={500} height={500} margin={{top:100,right:100,left:20,bottom:5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="category" interval={'preserveStartEnd'}/>
                    <YAxis/>
                    <Tooltip contentStyle={{ backgroundColor:'yellowgreen'}}/>
                    <Legend/>
                    <Line dataKey="Total_Item" stroke="blue" activeDot={{ r:7}}/>
                    <Line dataKey="Sold" stroke="red" activeDot={{ r:7}}/>
                    <Line dataKey="Available" stroke="green" activeDot={{ r:7}}/>
                    
                </LineChart>
            </ResponsiveContainer>
        </div>
        </>
    );
};
export default Statistic;
