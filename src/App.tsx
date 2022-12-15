import React from 'react';
import './App.css';
import {v1} from "uuid";
import {Todolist} from "./Todolist";

function App() {
  const tasks = [
    {id: v1(), title: 'HTML&CSS', isDone: true},
    {id: v1(), title: 'JavaScript', isDone: true},
    {id: v1(), title: 'React', isDone: true}
  ]
  return (
      <div className="App">
<Todolist/>
      </div>
  );
}

export default App;
