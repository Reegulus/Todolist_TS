import React from 'react';

type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
}
type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export function Todolist({title, tasks}: TodolistPropsType) {
    const tasksMapping: Array<JSX.Element> | JSX.Element = tasks.length !==0
      ?  tasks.map((task => {
        return <li key={task.id}>
            <input
                type="checkbox"
                checked={task.isDone}/>
            <span>{task.title}</span>
        </li>
    }))
            : <span>Your tasks is empty</span>
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksMapping}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}
