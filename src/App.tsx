import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./components/Todolist";

function App() {
    const titleTodo = 'What to learn'
   const [tasks, setTasks] = useState<TasksType[]>(
        [
            { id: 1, title: 'HTML&CSS', isDone: true },
            { id: 2, title: 'JS', isDone: true },
            { id: 3, title: 'ReactJS', isDone: false },
            { id: 4, title: 'Redux', isDone: false }
        ]
    )
    const removeTask = (id: number) => {
        let task = tasks.filter(t => t.id !== id)
        setTasks([...task])
    }
    return (
        <div className="App">
            <Todolist
                title={titleTodo}
                removeTask={removeTask}
                tasks={tasks}
            />
        </div>
    );
}

export default App;
