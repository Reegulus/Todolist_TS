import React from 'react';
import {Button} from "./Button";
import {FilterType} from "../App";

type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: number) => void
    changeFilter: (value: FilterType) => void

}
export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export function Todolist({title, tasks, removeTask, changeFilter}: TodolistPropsType) {
    const tasksMapping: Array<JSX.Element> | JSX.Element = tasks.length !== 0
        ? tasks.map((task => {
            return <li key={task.id}>
                <input
                    type="checkbox"
                    checked={task.isDone}/>
                <span>{task.title}</span>
                <Button title={'✘'} onClick={() => {
                    removeTask(task.id)
                }}/>
            </li>
        }))
        : <span>Your tasks is empty</span>
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={'✚'} onClick={() => {
                }}/>
            </div>
            <ul>
                {tasksMapping}
            </ul>
            <div>
                <Button title={'All'} onClick={() => {
                    changeFilter("all")
                }}/>
                <Button title={'Active'} onClick={() => {
                    changeFilter("active")
                }}/>
                <Button title={'Completed'} onClick={() => {
                    changeFilter("completed")
                }}/>
            </div>
        </div>
    )
}
