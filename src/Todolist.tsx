import React, {useState} from 'react';
import {FilterPropsType, TasksPropsType} from "./App";

export type  TodolistPropsType = {
    title: string
    tasks: TasksPropsType[]
    addTask: (taskTitle: string) => void
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterPropsType)=> void
}

export function Todolist(props: TodolistPropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState('')
    return (
        <div>
            <h2>{props.title}</h2>
            <input value={newTaskTitle}
                   onChange={(e) => {setNewTaskTitle(e.currentTarget.value)}}
                   onKeyPress={ (e) => {
                       if(e.key === 'Enter') {
                           props.addTask(newTaskTitle)
                           setNewTaskTitle('')
                       }
                   }}
            />
            <button onClick={() => {
                props.addTask(newTaskTitle)
                setNewTaskTitle('')
            }}>+
            </button>
            <ul>
                {props.tasks.map((t) => {
                    const removeChangeHandler = () => {
                        props.removeTask(t.id)
                    }
                    return (
                        <li key={t.id}>
                            <input type='checkbox' checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={removeChangeHandler}>x</button>
                        </li>
                    )
                })}
            </ul>
            <button onClick={ () => {props.changeFilter("all")}}>All</button>
            <button onClick={ () => {props.changeFilter("active")}}>Active</button>
            <button onClick={ () => {props.changeFilter("completed")}}>Completed</button>
        </div>
    );
};
