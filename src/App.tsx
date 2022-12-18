import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {Todolist} from "./Todolist";


export type TasksType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterForTodo = 'all' | 'active' | 'completed'

function App() {
    const [tasks, setTasks] = useState<Array<TasksType>>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JavaScript', isDone: true},
        {id: v1(), title: 'React', isDone: false},

    ])
    const [filter, setFilter] = useState<FilterForTodo>('all')
    const removeTask = (taskId: string) => {
        let task = tasks.filter((t) => {
            return t.id !== taskId
        })
        setTasks(task)
    }
    const addTask = (title: string) => {
        const newTask = {id: v1(), title: title, isDone: false}
        const newArrTasks = [newTask, ...tasks]
        setTasks(newArrTasks)
    }
    const changeFilter = (value: FilterForTodo) => {
        setFilter(value)
    }
    const changeStatus = (taskId: string, isDone: boolean) => {
        const task = tasks.find(t=> t.id === taskId)
        if (task) {
            task.isDone = isDone
        }
        setTasks([...tasks])
    }

    let taskForTodolist = tasks
    switch (filter) {
        case "active":
            taskForTodolist = tasks.filter(t => t.isDone === false)
            break;
        case "completed":
            taskForTodolist = tasks.filter(t => t.isDone === true)
            break;
    }
    return (

        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={taskForTodolist}
                addTask={addTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
                changeTaskStatus={changeStatus}
                filter={filter}
            />
        </div>
    );
}

export default App;
