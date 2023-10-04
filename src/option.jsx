import React,{useState} from "react";
import Input from './input.jsx';

export default function Option(){
  const [variable,setVariable] = useState(0);
  const select = [{
      value: 0,
      label: "Select the Number of Variables",
      //isdisabled: true // disable this option
    },
    {
      value: 1,
      label: "One"
    },
    {
      value: 2,
      label: "Two",
    },
    {
      value: 3,
      label: "Three"
    },
    {
      value: 4,
      label: "Four",
    }
  ];
 function handleChange(e) {
    setVariable(e.target.value);
  }
  return (
     <div>
        <div className="container-fluid mb-5">
            <select className="form-select bg-dark text-light mb-3" id="noOfVariables" placeholder="Select the Number of Variables" onChange={handleChange}>
              {select.map((option) => {
                return (
                  <option value={option.value} key={option.value}>{option.label}</option>
                )
            })}  
            </select>
        </div>
       <Input variableNo={variable}/>
     </div> 
  )
}
