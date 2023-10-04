import React,{useState} from "react";
import Capture from "./capture.jsx";

const Input = (props) =>{
  const [inputVar, setInputVar] = useState([]);
  const inputNo = [];
  const inputVardic = [];
  // setting dics in arr for no of variable
  for(let i=1;i<=props.variableNo;i++)
  {
    inputNo.push(
      {
        key:         i,
        varname:     "varName"+i,
        varvalue:    "varValue"+i
      });   
  }
function getSetValue(){
  for(let i=0;i<props.variableNo;i++)
  {
    inputVardic.push(
    {
      key: document.getElementById(inputNo[i].varname).value,
      value: document.getElementById(inputNo[i].varvalue).value
    })
  }
  if(inputVardic !== inputVar)
  {
    setInputVar(inputVardic)    
  }
}
  return(
    <div>
      <div className="container-fluid text-center">
      <form>
      {inputNo.map((f)=>{
      return(
          
            <div key={f.key} className="container-fluid text-center mb-3">
            <label style={{ marginRight: '.5rem' }} >Variable {f.key} :</label>
            <input id={f.varname} className="input bg-dark mb-2 py-2 text-light" type="text" placeholder="Variable name" autoComplete="off"/>
            <input id={f.varvalue} className="input bg-dark mb-2 py-2 text-light" type="text" placeholder="Value" autoComplete="off"/>
          </div>
        
        )
    })}
        <input type="button" id="continuebtn" className="btn btn-success" value="Continue" onClick={getSetValue} />
        </form>
    </div>
      <Capture Dics={inputVar} valNo={props.variableNo}/>
    </div>
  )
}
export default Input;