import React, {useState} from 'react';

function Todo({todo, index, completeTodo}){
  return(
    <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
    </div>
  )
}


function TodoForm({addTodo}){
  const [value,setValue] = useState('');
  
  const handleSubmit = e =>{
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  
  };

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="add Todo..." className="input" value = {value} onChange = {e => setValue(e.target.value)} /> 
    </form>
  )
}




function App(){
  const[todos, setTodos] = useState([{
    text: 'Learn about React Hooks',
    isCompleted: false

  },
  {
    text: 'Learn about Angular Hooks',
    isCompleted: false

  },
  {
    text: 'Learn about JAVA Hooks',
    isCompleted: false

  }]);

  const addTodo = text =>{
    const newTodos = [...todos,{text}];
    setTodos(newTodos);
  };

  const complateTodo = index =>{
    const newTodos=[...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="todo-list">
          {todos.map((todo,index)=>(
           <Todo key={index} index={index} todo={todo} completeTodo={complateTodo} ></Todo> 
          ))}
          <TodoForm addTodo={addTodo}></TodoForm>
      </div>
    </div>

  )
}

export default App;