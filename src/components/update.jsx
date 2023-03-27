import { useParams } from "react-router-dom";
import { supabase } from '../client'
import { useEffect, useState } from "react";
const Update = () =>{
    let {id} = useParams();
    const [currentCrewmate, setCurrentCrewmate] = useState({})
    
    useEffect(()=> {
        const fetchData = async() => {
            const {data} = await supabase
            .from("Crewmates")
            .upsert({ id: atob(id)})
            .select();
           setCurrentCrewmate(data[0]);  
        };

        fetchData();
      

    },[])

    return(
        <div className="update-page">
            <h1>Update Your Crewmate</h1>
            <h2>Current crewmate info:</h2>
            <h4>{"name: " + currentCrewmate.name }</h4>
            <div>{atob(id)}</div>
        </div>
        
    )
};

export default Update;