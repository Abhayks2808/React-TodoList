import React from 'react'
import './Todo-list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoList = ({text,id,handledelete,handleEdit,handlecompleted}) => {
    return (
        <div className="list" >
          <p>
            {text}       
        <span>
            <FontAwesomeIcon icon="pen" onClick={handleEdit} className="pen" /> 
            <FontAwesomeIcon icon="trash" onClick={handledelete}  />   
        </span> 
          </p>
                
    </div>
    )
}
export default TodoList;


