import React from "react";
import { useState, useEffect } from "react";

import { supabase } from '../client'

const Home = () =>{

    const [allCrewmates, setAllCrewmates] = useState(null);
    const [summary, setSummary] = useState({
        number:0,
        boolean:0,
        character:0,
        string:0,
        non_primitive:0
    })


    const summarizeData = (data)=>{
        let summary = {
            number:0,
            boolean:0,
            character:0,
            string:0,
            non_primitive:0
        };
        data.forEach(element => {
            if(element.type == "number"){
                summary.number += 1;
            }else if(element.type == "boolean"){
                summary.boolean += 1;
            }else if(element.type == "char"){
                summary.character += 1;
            }else if(element.type == "string"){
                summary.string += 1;
            }else{
                summary.non_primitive += 1;
            }
        });

        console.log(summary);
        setSummary(summary);

    }

    useEffect(()=> {
        const fetchData = async() => {
            const {data} = await supabase
            .from("Crewmates")
            .select()
            .order("created_at", {ascending: true});
            setAllCrewmates(data);
            summarizeData(data);
            
        };

        fetchData();
      

    },[]);


    return(
        <div className="home">

           <h1>Welcome to the Crewmate Creator!</h1>
           <h3>You can create your own set of variable crewmates here.</h3>
           <img className="home-img"  src="https://www.computersciencedegreehub.com/wp-content/uploads/2023/02/shutterstock_535124956-scaled.jpg" />

           <div className="home-summary">
             <div className="summary-title">Summary</div>
             
                <table >
                    <tr>
                        <td>Number: {summary.number}</td>
                        <td>Boolean: {summary.boolean}</td>
                        <td>Character: {summary.character}</td>
                    
                    </tr>
                    <tr>
                        <td>String: {summary.string}</td>       
                        <td>Non-primitive: {summary.non_primitive}</td>                      
                    </tr>
                </table>
            
           </div>

        </div>
    )
}


export default Home;