import React from "react";
import { Link, useParams } from "react-router-dom";

const Detail = ()=>{

    let {name, value, type} = useParams();
   

   return(
    <div className="detail">
        <h1>Crewmate: {atob(name)}</h1>
        <h3 style={{margin: "50px"}} >Current Status:</h3>
        <div >
            <h5>value: {atob(value)}</h5>
            <h5>value: {atob(type)}</h5>
        </div>
       <h5 style={{margin: "50px"}}>Click the button to create more crewmates?</h5>
       <button><Link to="/create">Create</Link></button>  
    </div>
   )
};

export default Detail