import React from 'react';
import './App.css';
import {v1} from "uuid";
import {TasksType, Todolist} from "./Todolist";



function App() {
    const tasks: Array<TasksType> = [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JavaScript', isDone: true},
        {id: v1(), title: 'React', isDone: false}
    ]
    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={tasks}
            />
        </div>
    );
}

export default App;
