import React, { useState } from "react";

import { supabase } from '../client'
import { useEffect } from "react";
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom'



const Gallery = () =>{

    const [allCrewmates, setAllCrewmates] = useState(null);
    const [deleteACrewmate, setDeleteACrewmate] = useState(false);

    useEffect(()=> {
        const fetchData = async() => {
            const {data} = await supabase
            .from("Crewmates")
            .select()
            .order("created_at", {ascending: true});
            setAllCrewmates(data);
        };

        fetchData();
      

    },[deleteACrewmate]);

    const handleDeleteBtn = (event) => {
        let id = event.target.id;
        deleteCrewmate(id);
        
    }

   const deleteCrewmate = async(id) =>{
        await supabase
            .from("Crewmates")
            .delete()
            .match({"id": id})
        setDeleteACrewmate((currentState) => !currentState);    
   }



    return(
        <div className="gallery">

            {allCrewmates && allCrewmates.length > 0 ? (
                 allCrewmates.map((element, index) => (
                  
                       <div key={index}  className="gallery-card">
                        <Link to= {"/gallery/" + btoa(element.name) + "/" + btoa(element.value) + "/" + btoa(element.type) + "/" + "detail"}><div className="clickable-block"></div></Link>
                         <div className="gallery-card-attr">
                             <div >Name: {element.name}</div>
                             <div >Value: {element.value}</div>
                             <div >Type: {element.type}</div>
                         </div>
                         <div className="gallery-card-buttons">
                             <button className="gallery-card-button"><Link to= {"/gallery/" + btoa(element.id) + "/edit"}>Edit</Link></button>
                             <button className="gallery-card-button" id={element.id} onClick={handleDeleteBtn}>Delete</button>
                         </div>
                       </div>
                   
                 ))
            ):(
                "There are no crewmates here!"
            )}
          
        </div>
    )
}



export default Gallery;