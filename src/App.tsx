import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type TasksPropsType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterPropsType = 'all' | 'active' | 'completed'

function App() {
    const [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: false},
        {id: v1(), title: 'JavaScript', isDone: false},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Redux', isDone: false}
    ])
    const [filter, setFilter] = useState<FilterPropsType>('all')
    function addTask () {

    }
    function changeStatus () {

    }
    function removeTask() {

    }
    function changeFilter () {

    }
    let taskForTodolist = tasks




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
