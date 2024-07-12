import React from 'react';
import {Button} from "./Button";

type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: number)=>void

}
export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export function Todolist({title, tasks, removeTask}: TodolistPropsType) {
    const tasksMapping: Array<JSX.Element> | JSX.Element = tasks.length !==0
      ?  tasks.map((task => {
        return <li key={task.id}>
            <input
                type="checkbox"
                checked={task.isDone}/>
            <span>{task.title}</span>
            <Button title={'✘'} callback={() => {
                removeTask(task.id)}}/>
        </li>
    }))
            : <span>Your tasks is empty</span>
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={'✚'} callback={ () => {}}/>
            </div>
            <ul>
                {tasksMapping}
            </ul>
            <div>
                <Button title={'All'} callback={() => {}}/>
                <Button title={'Active'} callback={ () =>{}}/>
                <Button title={'Completed'} callback={() =>{}}/>
            </div>
        </div>
    )
}
