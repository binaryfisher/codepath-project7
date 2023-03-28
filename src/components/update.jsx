import { useParams } from "react-router-dom";
import { supabase } from '../client'
import { useEffect, useState } from "react";
import InputForm from "./inputForm";

const Update = () =>{
    let {id} = useParams();
    const [currentCrewmate, setCurrentCrewmate] = useState({});
    const [crewmateBeenUpdated, setCrewmateBeenUpdated] = useState(false)

    const handleBtnClick = ()=>{

    }
    
    useEffect(()=> {
        const fetchData = async() => {
            const {data} = await supabase
            .from("Crewmates")
            .upsert({ id: atob(id)})
            .select();
           setCurrentCrewmate(data[0]);  
        };

        fetchData();
      

    },[crewmateBeenUpdated])

    return(
        <div className="update-page">
            <h1>Update Your Crewmate</h1>
            <h2>Current crewmate info:</h2>
            <div className="update-page-attr-card">
                <h4>{"name: " + currentCrewmate.name }</h4>
                <h4>{"value: " + currentCrewmate.value }</h4>
                <h4>{"type: " + currentCrewmate.type }</h4>
            </div>
            <InputForm btnClickFunction="update" btnTxt="Update" id={id} stateChange={setCrewmateBeenUpdated} />

        </div>
        
    )
};

export default Update;