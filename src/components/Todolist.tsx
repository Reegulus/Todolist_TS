import React from 'react';
import {Button} from "./Button";

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
            <Button title={'✘'}/>
        </li>
    }))
            : <span>Your tasks is empty</span>
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={'✚'}/>
            </div>
            <ul>
                {tasksMapping}
            </ul>
            <div>
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Completed'}/>
            </div>
        </div>
    )
}
