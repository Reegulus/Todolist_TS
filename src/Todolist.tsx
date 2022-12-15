import React from 'react';
import {FilterForTodo, TasksType} from "./App";

export type TodolistTypeProps = {
    title: string
    tasks: Array<TasksType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterForTodo) => void
}

export function Todolist(props: TodolistTypeProps) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(t =>
                    <li key={t.id}>
                        <input type="checkbox"
                               checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={ ()=> {props.removeTask(t.id)}}>x</button>
                    </li>
                )}
            </ul>
            <div>

                <button onClick={ () => {props.changeFilter('all')}}>All</button>
                <button onClick={ () => {props.changeFilter('active')}}>Active</button>
                <button onClick={ () => {props.changeFilter('completed')}}>Completed</button>
            </div>
        </div>
    );
};

