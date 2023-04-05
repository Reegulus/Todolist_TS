import React, {useState} from 'react';
import {FilterPropsType, TasksPropsType} from "./App";

export type  TodolistPropsType = {
    title: string
    tasks: TasksPropsType[]
}

export function Todolist(props: TodolistPropsType) {

    return (
        <div>
            <h2>{props.title}</h2>
            <input type="text"/>
            <button>+</button>
            <ul>
                {props.tasks.map( (el) => {
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                            <button>x</button>
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
