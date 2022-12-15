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
    const [tasks, setTasks] = useState <Array<TasksType>>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JavaScript', isDone: true},
        {id: v1(), title: 'React', isDone: false},

    ])
    const [filter, setFilter] = useState<FilterForTodo>('all')
    const removeTask = (taskId: string) => {
        let task = tasks.filter( (t) => {return t.id !== taskId})
        setTasks(task)
    }
    const changeFilter = (value: FilterForTodo) => {
        setFilter(value)
    }
    let taskForTodolist = tasks
    if(filter === 'active') {
        taskForTodolist = tasks.filter( t=>t.isDone === true)
    }
    if(filter === 'completed') {
        taskForTodolist = tasks.filter( t=> t.isDone === false)
    }
    return (

        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={taskForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
