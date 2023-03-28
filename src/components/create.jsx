import React from "react";
import { useState } from "react";
import { supabase } from "../client";
import InputForm from "./inputForm";



const Create = () =>{
      
   



    return(
        <div className="create-page">
           <h1>Create a new crewmate</h1>
           <img className="create-img" src="src\assets\create-img.jpg" />
          
          <InputForm btnClickFunction="create" btnTxt="Create" />

        </div>
    )
}


export default Create;