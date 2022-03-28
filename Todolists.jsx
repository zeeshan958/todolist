import React from "react";
const Todolists=(props)=>{
   

    return (
        <>
        <div className="todo_style"> 
        
        <i className ="zeeshan"aria-hidden="true"
        onClick={()=>{
            props.onSelect(props.id)
        }}/>
    <li>{props.text}</li>
    </div>
    </>

    );

}
export default Todolists;