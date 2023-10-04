import React,{useState} from "react";
import Operation from './operation.jsx'
const Capture = (props) => {
  const arr = props.Dics
   if(props.valNo != props.Dics.length){
     return (<></>)
   }
  else{
    return(
     <div  className="container-fluid text-center mt-3">
       <div className="row justify-content-md-center">
         {arr.map((a)=>{
          if(a.key!="")
         return(
          <div key={a.key} className="col col-lg-2">{a.key} = {a.value}</div>
         )})}
     </div>
       <Operation Dics={arr} valNo={props.valNo}/>
    </div>
   )
  }
}
export default Capture