import React, { useState } from "react";
import ToDoLists  from "./ToDoLists";
import './index.css';

const App=()=>{
  const [input,setinput]=useState();
  const[items,setitems]=useState([]);

  const inputData=(e)=>{
setinput(e.target.value);
  };
const doneitems=()=>{
  setitems((preValue)=>{
    return[...preValue,input];
  
  });
  setinput("");
};
const delteitem=(id)=>{
 setitems((preValue)=>{
  return preValue.filter((arreElement,index)=>{
   return index !==id;
  })
 })
}
 
   
  return(
    <React.Fragment>
      <div className="main-div">
        <div className="center-div">
        <br/>
        <h1>To-Do-App</h1>
        <br/>
        <input type="text" placeholder="Add a item" value={input} onChange={inputData} />
        <button onClick={doneitems}>+</button>

        <ol>
          {items.map((value,index)=>{
          return < ToDoLists text={value}
            key={index}
            id={index}
            onSelect={delteitem}
          />
          })}
        </ol>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
