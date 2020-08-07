import React from 'react';


const ListItem = (props) => {
    let Todos = props.todos;
     return(
    <div className="Todolist">
        <ul>
         <li>{Todos}</li>
        </ul>
     </div>
    )
}
 



export default ListItem;
