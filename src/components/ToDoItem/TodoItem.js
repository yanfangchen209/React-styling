import React from 'react'
import './ToDoItem.css'

export const TodoItem = (props) => {
  
  function deleteHandler(){
    props.onDelete(props.id);
  }
  return (
    <div className='goal-item' onClick={deleteHandler}>{props.todoName}</div>
  )
}

export default TodoItem;
