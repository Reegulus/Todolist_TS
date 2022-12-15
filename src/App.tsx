import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {Todolist} from "./Todolist";


export type TasksType = {
    id: string
    title: string
    isDone: boolean
}
function App() {
    const [tasks, setTasks] = useState <Array<TasksType>>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JavaScript', isDone: true},
        {id: v1(), title: 'React', isDone: false},
    ])
    const removeTask = (taskId: string) => {
        let task = tasks.filter( (t) => {return t.id !== taskId})
        setTasks(task)
    }
    return (

        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;
