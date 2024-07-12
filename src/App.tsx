import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./components/Todolist";


export type FilterType = 'all' | 'active' | 'completed'

function App() {
    const titleTodo = 'What to learn'
    const [tasks, setTasks] = useState<TasksType[]>(
        [
            {id: 1, title: 'HTML&CSS', isDone: true},
            {id: 2, title: 'JS', isDone: true},
            {id: 3, title: 'ReactJS', isDone: false},
            {id: 4, title: 'Redux', isDone: false}
        ]
    )
    const [filter, setFilter] = useState<FilterType>('all')
    const removeTask = (id: number) => {
        let task = tasks.filter(t => t.id !== id)
        setTasks([...task])
    }

    const changeFilter = (value: FilterType) => {
        setFilter(value)
    }
    let taskForTodolist = tasks
    if (filter === 'active') {
        taskForTodolist = tasks.filter(f => f.isDone)
    }
    if (filter === 'completed') {
        taskForTodolist = tasks.filter(f => !f.isDone)
    }

    return (
        <div className="App">
            <Todolist
                title={titleTodo}
                removeTask={removeTask}
                tasks={taskForTodolist}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
