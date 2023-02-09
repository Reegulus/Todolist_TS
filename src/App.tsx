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
    function addTask (taskTitle: string) {
        let newTask = {id: v1(), title: taskTitle, isDone: false}
        setTasks([newTask, ...tasks])
    }
    function changeStatus (taskId: string, isDone: boolean) {
        let task = tasks.find(t => t.id === taskId)
        if(task) {
            task.isDone = isDone
        }
        setTasks([...tasks])
    }
    function removeTask(taskId: string) {
        setTasks(tasks.filter(t => t.id !== taskId))
    }
    function changeFilter (value: FilterPropsType) {
        setFilter(value)
    }
    let taskForTodolist = tasks
    if(filter === 'active') {
        taskForTodolist = tasks.filter(t=> t.isDone === true)
    }
    if (filter === 'completed') {
        taskForTodolist = tasks.filter(t => t.isDone === false)
    }



    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={taskForTodolist}
                addTask={addTask}
                removeTask={removeTask}
                changeStatus={changeStatus}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
