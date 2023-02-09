import React, {useState} from 'react';
import {FilterPropsType, TasksPropsType} from "./App";

export type  TodolistPropsType = {
    title: string
    tasks: TasksPropsType[]
    addTask: (taskTitle: string) => void
    removeTask: (taskId: string) => void
    filter: FilterPropsType
    changeStatus: (taskId: string, isDOne: boolean) => void
    changeFilter: (value: FilterPropsType) => void
}

export function Todolist(props: TodolistPropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [error, setError] = useState<string | null>('')
    return (
        <div>
            <h2>{props.title}</h2>
            <input
                className={error ? 'error' : ""}
                value={newTaskTitle}
                onChange={(e) => {setNewTaskTitle(e.currentTarget.value)}}
                onKeyPress={(e) => {
                    setError('')
                    if (e.key === 'Enter' && newTaskTitle.trim() !== '') {
                        props.addTask(newTaskTitle)
                        setNewTaskTitle('')
                    }
                }}
            />

            <button onClick={() => {
                setError("")
                if(newTaskTitle.trim() !== '') {
                    props.addTask(newTaskTitle.trim())
                    setNewTaskTitle('')
                } else {
                    setError('Title is required ')
                }
            }}>+</button>
            {error && <div className={'error-message'}>{error}</div>}
            <ul>
                {props.tasks.map((t) => {

                    const removeChangeHandler = () => {
                        props.removeTask(t.id)
                    }
                    return (
                        <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                            <input type='checkbox' checked={t.isDone}
                                   onChange={(e) => {
                                       props.changeStatus(t.id, e.currentTarget.checked)
                                   }}
                            />
                            <span>{t.title}</span>
                            <button onClick={removeChangeHandler}>x</button>
                        </li>
                    )
                })}
            </ul>
            <button className={props.filter === 'all' ? 'active-filter': ''} onClick={() => {
                props.changeFilter("all")
            }}>All
            </button>
            <button className={props.filter === 'active' ? 'active-filter' : ''} onClick={() => {
                props.changeFilter("active")
            }}>Active
            </button>
            <button className={props.filter === 'completed' ? 'active-filter' : ''} onClick={() => {
                props.changeFilter("completed")
            }}>Completed
            </button>
        </div>
    );
};
