import { useState } from 'react';
import './ToDoApp.css';

const ToDoApp=()=>{
  const [todos,setToDos]=useState([]);
  const [inputValue,setInputValue]=useState('');

  const handleInputChange=(event)=>{
    setInputValue(event.target.value);
  }

  const addToDo=()=>{
    if(inputValue.trim() !==''){
      setToDos([...todos, {id:Date.now(), text:inputValue, completed:false}]);
      setInputValue('');
    }
    console.log(inputValue);
  }

  const todoComplete=(id)=>{
    const updateTodo=todos.map((todo)=>
      todo.id === id ?{...todo, complete: !todoComplete}: todo
    );
    setToDos(updateTodo);
    console.log(updateTodo);
  }

  const delToDo=(id)=>{
    const deleteTodo=todos.filter((todo)=>todo.id !==id);
    setToDos(deleteTodo);
    console.log(deleteTodo);
  }

  return(
    <>
      <div className="App">
        <h2>To-Do App</h2>
          <div className='App-input'>
            <input type="text" placeholder='Enter your task...' id='input' value={inputValue} onChange={handleInputChange} />
            <button className='App-add' onClick={addToDo}>Add</button>
          </div>
          <ul className='App-list'>
            {
              todos.map((todo)=>(
                <li key={todo.id} className={todo.completed ? 'completed':''}>
                  <span onClick={()=> todoComplete(todo.id)}>{todo.text}</span>
                  <button onClick={()=>delToDo(todo.id)}>Delete</button>
                </li>
              ))
            }
          </ul>   
        </div>
    </>
  )
}

export default ToDoApp;