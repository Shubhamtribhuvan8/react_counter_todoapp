import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItems';

export default function Todo(props) {
    const [text, setText] = useState("");
    const [todoItems, setItems] = useState([]);

    function addToItems() {
      var newItem={
        title:text,
        status:true
      }
        setItems([...todoItems, newItem]);
        setText('');
    }

    function  DeleteItem(index){
        var filterdata=todoItems.filter((item,i)=>{
        return index!==i;
        })
        setItems(filterdata);
    }

    const handleToggle=(index)=>{
      var newArray=todoItems.map((item,i)=>{
          return index===i ? {...item ,status:!item.status}:item
      })
      setItems(newArray);
    }
  return (
    <div style={{marginTop:"100px"}}>
      <h1>Todo Example</h1>
      <input value={text} type="text" placeholder='Enter some text'
      onChange={(e)=>{setText(e.target.value)}} />
      <button onClick={addToItems}>Add Item</button>
      <TodoItem todoItem={todoItems} deleteItem={DeleteItem} handleToggle={handleToggle} />
    </div>
  )
}
