import React, { useState } from "react";

import { supabase } from '../client'
import { useEffect } from "react";
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom'
const Gallery = () =>{

    const [allCrewmates, setAllCrewmates] = useState(null);

    useEffect(()=> {
        const fetchData = async() => {
            const {data} = await supabase
            .from("Crewmates")
            .select()
            .order("created_at", {ascending: true});
            setAllCrewmates(data);
        };

        fetchData();
      

    },[])

   



    return(
        <div className="gallery">

            {allCrewmates && allCrewmates.length > 0 ? (
                 allCrewmates.map((element, index) => (
                   <div key={index} className="gallery-card">
                     <div className="gallery-card-attr">
                         <div >Name of Crewmate: {element.name}</div>
                         <div >Value of Crewmate: {element.value}</div>
                         <div >Type of Crewmate: {element.type}</div>
                     </div>
                     <button className="gallery-card-button"><Link to="/gallery/id">Edit Crewmate</Link></button>
                   </div>
                 ))
            ):(null)}
           
        </div>
    )
}


export default Gallery;