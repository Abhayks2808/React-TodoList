import React from 'react';
import './TodoInput.css'
const TodoInput = (props) => {
    const {handlechange,handlesubmit,value} = props
    return (
        <header>
            <form id="todo-form"  onSubmit ={handlesubmit}>
            <div className="formInput"> 
            <input type="text" placeholder="Enter-Text" value={value} onChange={handlechange} />
            <button type="submit">Add Item</button>
            </div>
            </form>
        </header>
    )
}

export default TodoInput;