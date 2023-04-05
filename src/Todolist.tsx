import React, {ChangeEvent, useState} from 'react';
import {FilterPropsType, TasksPropsType} from "./App";

export type  TodolistPropsType = {
    title: string
    tasks: TasksPropsType[]
    addTask: (title: string)=> void
    removeTask: (taskId: string)=> void
    changeStatus: (taskId: string, isDone: boolean)=> void
}

export function Todolist(props: TodolistPropsType) {
    const [newTitle, setNewTitle] = useState('')

    return (
        <div>
            <h2>{props.title}</h2>
            <input
                placeholder={'new text'}
                value={newTitle}
                onChange={ (e) => {
                setNewTitle(e.currentTarget.value)
            }}/>
            <button onClick={ () => {
                props.addTask(newTitle)
                setNewTitle('')
            }}>+</button>
            <ul>
                {props.tasks.map( (el) => {
                    const removeTaskHandler = () => {props.removeTask(el.id)}
                    const onChangeTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked
                        props.changeStatus(el.id, newIsDoneValue)
                    }
                    return (
                        <li key={el.id}>
                            <input
                                type="checkbox"
                                checked={el.isDone}
                                onChange={onChangeTaskHandler}
                            />
                            <span>{el.title}</span>
                            <button onClick={removeTaskHandler}>x</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>

        </div>
    );
};
