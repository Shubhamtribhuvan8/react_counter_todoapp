import React from "react";

function TodoItem({todoItem,deleteItem,handleToggle}){
    return(
        <div>
            {todoItem.map((item)=>{
                return(
                    <div>
                        <h4>{item.title}</h4>  &nbsp;&nbsp;
                        <h5 style={{color:"red"}}>
                            {item.status?"Completed" :"Not Completed"}
                        </h5>
                        <button onClick={()=>handleToggle()}>Toggle</button> 
                        &nbsp;&nbsp;
                        <button onClick={()=>{deleteItem()}}>Delete</button>
                    </div>    
                );
            })}
        </div>
    );
}

export default TodoItem;
