import React,{useState} from "react";


const Result = (props) =>{
  const resarr = props.Dics;
  var str = props.Exp;
  var res;
  
  //creating a key-value pair of Dics in a matrix
  var arrKey=[];
  function setArray(item){
      if(item.key != ""){
        arrKey.push([item.key,parseInt(item.value)])
      }
    }
  props.Dics.forEach(setArray);

  var newStr="";
  var firstApp=0;
  var minApp=0;
  var keyName="";
  var keyIndex=0;

  function firstKey(item,index){
    if(str.includes(item[0]))
    {
      firstApp = str.indexOf(item[0])
        if(keyName=="")
        {
          minApp=firstApp;
        }
        if(firstApp<=minApp)
        {
          keyName=item[0];
          keyIndex=index;
          minApp=firstApp;
        }
      }
    }

  while(str!="")
  {
    var keyPresent = false;
    arrKey.forEach ((item) =>{
    if(str.includes(item[0])){
        keyPresent =  true;
        }
    })
    if(keyPresent == false)
    {
        newStr=newStr.concat(str);
        str="";
        break;
    }
    arrKey.forEach(firstKey);
    var repstr = "arrKey[x][1]";
    repstr = repstr.replace("x",keyIndex);
    var tmpStr = str.slice(0,minApp+keyName.length).replace(keyName,repstr);
    str = str.slice(minApp+keyName.length,str.length);
    newStr = newStr.concat(tmpStr);
    
  }
    try{
      if(newStr!="")
      {
        str=newStr;
      }
      res = eval(str)
      if(res == true || res == false){
        res = res.toString()
      }
      function updateKey(item,index){
        if(item["key"] == arrKey[index][0]){
          item["value"] = arrKey[index][1];
        }
      } 
      resarr.forEach(updateKey)
    }catch(e){
      alert(e+"\nReport bugs At: 9831739043 and WhatsApp : 9088023665")
    }
  
  if(res!=null){
    return(
    <div className="mt-5">
      <b>Result : </b>{res}
      <div className="row justify-content-md-center">
      {resarr.map((item)=>{
      if(item.key!=""){
        return(
          <div key={item.key} className="col col-lg-2">{item.key} = {item.value}</div>
          )
      }
        else{
          return(null)
        }
      })}
      </div>
    </div>
    )
  }else{
    return(<></>)
  }
}
export default Result