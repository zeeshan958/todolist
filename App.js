import './App.css';
import Todolists from "./componant/Todolists";

import React, { useState } from 'react';


const App=()=>{
  const [inputList,setInputList]= useState("");
  const [Items,setItems]= useState([]);
  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };
  const listofItems = ()=>{
    setItems((oldItems)=>{
      return[...oldItems,inputList];
    });
    setInputList("");
  };
  const itemdelete=(id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !==id ;
      })
    })
};

  return(
  <>
  <div className="main_div">
    <div className="center_div">
      <br/>
      <h1>To Do </h1>
      <br/>
      <input
       type ="text" 
       placeholder="Add Task"
      value ={inputList}
      onChange={itemEvent}/>
      <button onClick={listofItems}>+</button>
      <ol>
       { /*  we want to return this in map function <li>{inputList}</li>*/
       Items.map((Itemval,index)=>{

          return  <Todolists key={index} 
          id={index}
          text={Itemval}
          onSelect={itemdelete}/>;
       })
       
       }
      </ol>
    </div>
  </div>
   
  </>

  )

}


export default App;
