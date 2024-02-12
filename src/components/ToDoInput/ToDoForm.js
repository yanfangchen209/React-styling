import React, {useState} from 'react';
import './ToDoForm.css';

function ToDoForm(props){
    const [todoName, setToDoName] = useState('');
    const [isValid, setIsValid] = useState(true);


    function onChangeHandler(event){
        if(event.target.value.trim().length > 0){
            setIsValid(true);
        }
        setToDoName(event.target.value);
    }

    
    function onAddHandler(event){
        event.preventDefault();
        if(todoName.trim().length === 0){
            setIsValid(false);
            return;
        }
        props.onAdd(todoName);
        setToDoName('');
    }

    return (    
    <div>
        <form>
            <div className={`form-control ${!isValid ? 'invalid': ''}`}>
                <label htmlFor='todo'>To do task: </label>
                 {/**two way binding, value={todoName}, set it to '' after submission */}
                <input id='todo' name="todo" value={todoName} type='text' onChange={onChangeHandler} /><br/><br/>
            </div>
 
            <button onClick={todoName => onAddHandler(todoName)}>Add Task</button>
        </form>
    </div>
    );

}

export default ToDoForm;