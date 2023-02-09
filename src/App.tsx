import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type TasksPropsType = {
    id: string
    title: string
    isDone: boolean
}

function App() {
    const [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: false},
        {id: v1(), title: 'JavaScript', isDone: false},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Redux', isDone: false}
    ])
    function addTask (taskTitle: string) {
        let newTask = {id: v1(), title: taskTitle, isDone: false}
        setTasks([...tasks, newTask])
    }
    function removeTask(taskId: string) {
        setTasks(tasks.filter(t => t.id !== taskId))
    }


    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={tasks}
                addTask={addTask}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;
