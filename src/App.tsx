import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type TasksPropsType = {
    id: string
    title: string
    isDone: boolean
}
export type TodolistType = {
    id: string
    title: string
    filter: FilterPropsType
}
export type FilterPropsType = 'all' | 'active' | 'completed'

function App() {
    const todolist1 = v1()
    const todolist2 = v1()
    const [todolist, setTodolist] = useState<TodolistType[]>([
        {id: todolist1, title: 'What to learn', filter: 'all'},
        {id: todolist2, title: 'What to buy', filter: 'all'},
    ])
    const [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: false},
        {id: v1(), title: 'JavaScript', isDone: false},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Redux', isDone: false}
    ])
    const [filter, setFilter] = useState<FilterPropsType>('all')

    function addTask(title: string) {
        const newTask = {id: v1(), title: title, isDone: false}
        setTasks([newTask, ...tasks])
    }

    function changeStatus(taskId: string, isDone: boolean) {
       let task = tasks.find(el => el.id === taskId)
           if(task) {
               task.isDone = isDone
               setTasks([...tasks])
           }
    }

    function removeTask(taskId: string) {
        setTasks(tasks.filter(el => el.id !== taskId))
    }

    function changeFilter(value: FilterPropsType) {
        setFilter(value)
    }

    let taskForTodolist = tasks
if(filter === 'active') {
    taskForTodolist = tasks.filter(el => !el.isDone)
} if (filter === 'completed') {
    taskForTodolist = tasks.filter(el => el.isDone)
    }

    return (
        <div className="App">
            {todolist.map( (tl) => {
                return (
                    <Todolist
                        title={tl.title}
                        addTask={addTask}
                        filter={tl.filter}
                        tasks={taskForTodolist}
                        removeTask={removeTask}
                        changeStatus={changeStatus}
                        changeFilter={changeFilter}
                    />
                )
            })}

        </div>
    );
}

export default App;
