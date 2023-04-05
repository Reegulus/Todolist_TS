import React, {useState} from 'react';
import {FilterPropsType, TasksPropsType} from "./App";

export type  TodolistPropsType = {
    title: string
    tasks: TasksPropsType[]
    addTask: (title: string)=> void
    removeTask: (taskId: string)=> void
}

export function Todolist(props: TodolistPropsType) {

    return (
        <div>
            <h2>{props.title}</h2>
            <input type="text"/>
            <button onClick={ () => {props.addTask('hi')}}>+</button>
            <ul>
                {props.tasks.map( (el) => {
                    const removeTaskHandler = () => {props.removeTask(el.id)}
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.isDone}/>
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
