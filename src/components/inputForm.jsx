import React from "react";
import { useState } from "react";
import { supabase } from "../client";



const InputForm = ({btnClickFunction, btnTxt, id, stateChange}) =>{
    
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [type, setType] = useState("");
    const [nameValidation, setNameValidation] = useState("");
    const [valueValidation, setValueValidation] = useState("");
    const [typeValidation, setTypeValidation] = useState("");
    const [informBoxClass, setInformBoxClass] = useState("inform-box");
    const [informBoxTxt, setInformBoxTxt] = useState("")
    
    const createCrewmate =  async (event) =>{
        let isValid =  handleInputValidation();
        if(isValid){           
            await supabase
            .from("Crewmates")
            .insert({name: name, value: value, type: type})
            .select();
            setInformBoxClass("inform-box inform-box-display");
            if(btnTxt == "Create"){
                setInformBoxTxt(`Crewmate ${name} has been created!`)
            }else if(btnTxt == "Update"){
                setInformBoxTxt(`Crewmate ${name} has been updated!`)
            }
           
        }
       
    }

    const updateCrewmate = async() => {
        let isValid =  handleInputValidation();
        if(isValid){           
            await supabase
            .from("Crewmates")
            .update({name: name, value: value, type: type})
            .match({"id": atob(id)})
            setInformBoxClass("inform-box inform-box-display");
            if(btnTxt == "Create"){
                setInformBoxTxt(`Crewmate ${name} has been created!`)
            }else if(btnTxt == "Update"){
                setInformBoxTxt(`Crewmate ${name} has been updated!`)
            }
          
           stateChange((currentState) => !currentState);
        }
    }


    const handleBtnClick = () =>{
        if(btnClickFunction == "create"){
            createCrewmate();
        }else if(btnClickFunction == "update"){
            updateCrewmate(id);
        }
    }





    const handleNameInput = (event) => {
        handleInputValidation()
       setName(event.target.value);
       
    }
    const handleValueInput = (event) => {
        handleInputValidation()
        setValue(event.target.value);
       
    }

    const handleTypeInput = (event) =>{
        handleInputValidation()
        setType(event.target.value);

    }

    const handleInputValidation = () =>{
        if(!name){
            setNameValidation("Please enter a valid name")
        }else{
            setNameValidation("") 
        }

        if(!value){
            setValueValidation("Please enter a valid value")
         }else{
             setValueValidation("") 
         }

         if(!type){
            setTypeValidation("Please chose a type");

         }else{
            setTypeValidation("");
         }

         return(name && value && type)

    };

    const handleInformBoxClick = () =>{
        setInformBoxClass("inform-box inform-box-display inform-box-disappear")
    }

    return(
        
        <div className="input-form">

             <form className="create-form">
                <div className="create-form-name form-att">
                    <label htmlFor="name">Name:</label>
                    <br />
                    <input type="text" name="name" placeholder="Enter variable name" onChange={handleNameInput}/>
                    <div className="validation-box">{nameValidation}</div>
                </div>
        
                <div className="create-form-value form-att">
                    <label htmlFor="value">Value:</label>
                    <br />
                    <input type="text" name="value" placeholder="Enter variable value" onChange={handleValueInput} />
                    <div className="validation-box">{valueValidation}</div>
                </div>

                <div className="create-form-type form-att">
                    <div className="create-form-type-choice"><input type="radio" value="number" name="data-type" onChange={handleTypeInput} /> Number</div>
                    <div className="create-form-type-choice"><input type="radio" value="boolean" name="data-type" onChange={handleTypeInput} /> Boolean</div>
                    <div className="create-form-type-choice"><input type="radio" value="char" name="data-type" onChange={handleTypeInput} /> Character</div>
                    <div className="create-form-type-choice"><input type="radio" value="string" name="data-type" onChange={handleTypeInput} /> String</div>
                    <div className="create-form-type-choice"><input type="radio" value="nonPrimitive" name="data-type" onChange={handleTypeInput} /> Non-primitive</div>
                    <div className="validation-box">{typeValidation}</div>
                </div>


           </form>

           <button onClick={handleBtnClick}>{btnTxt}</button> 
           <div className={informBoxClass} onClick={handleInformBoxClick}>{informBoxTxt}</div>
           

        </div>
    )
};

export default InputForm;