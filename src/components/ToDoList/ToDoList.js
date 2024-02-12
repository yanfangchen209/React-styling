import React from 'react'
import TodoItem from '../ToDoItem/TodoItem'
import './ToDoList.css'

export const ToDoList = (props) => {
  return (
    <div className='goal-list'>
        {
        props.data.map(item => <TodoItem key={item.id} id={item.id} todoName={item.input} onDelete={props.onDeleteItem}/>)
        }
    </div>
  )
}

export default ToDoList;
