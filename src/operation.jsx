import React,{useState} from "react";
import Result from './result.jsx';
const Operation = (props) => {
  const [Exp, getExp] = useState("") 
  function getStr(){
    var str = document.getElementById("str").value;
    getExp(str)
    document.getElementById('continuebtn').click()
  }
  return(
  <div>
    <div className="container-fluid ">
      <input type="text" id="str" className="bg-dark text-light py-3 px-3 mt-5" placeholder="Enter expression/statement" autoComplete="off"/>
      <button className="bg-primary px-1 py-3 text-center mt-2"  onClick={getStr} >Show Result</button>
    </div>
  <Result Dics={props.Dics} valNo={props.valNo} Exp={Exp}/>
  </div>
  )
}
export default Operation