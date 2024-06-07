import React from 'react';

type TodolistPropsType = {
    title: string
    tasks: TasksType[]
}
type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export function Todolist(props: TodolistPropsType) {
    const tasksMaping = props.tasks.map((task => {
        return <li key={task.id}>
            <input
                type="checkbox"
                checked={task.isDone}/>
            <span>{task.title}</span>
        </li>
    }))
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksMaping}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}
