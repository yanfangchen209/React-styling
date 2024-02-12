
import { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoForm from './components/ToDoInput/ToDoForm';

function App() {
  const [todoData, setToDoData] = useState([]);

  function getUserInput(userData){
    const data = {
      input: userData,
      id: Math.random().toString()
    }
    setToDoData(prevData => {return [data, ...prevData]});
  }

  function deleteItemHandler(goalId){
    setToDoData(prevData => prevData.filter(todo => todo.id !== goalId));
  }

  let content = <p style={{textAlign: 'center'}}>No goals found. Maybe add one?</p>
  if(todoData.length > 0){
    content = <ToDoList data={todoData} onDeleteItem={deleteItemHandler}/>;

  }
  return (
    <div>
      <section id="goal-form">
        <ToDoForm onAdd={getUserInput} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
}

export default App;
