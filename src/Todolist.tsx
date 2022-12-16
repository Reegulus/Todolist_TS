import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterForTodo, TasksType} from "./App";

export type TodolistTypeProps = {
    title: string
    tasks: Array<TasksType>
    addTask: (title: string) => void
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterForTodo) => void
}

export function Todolist(props: TodolistTypeProps) {
    const [newTitle, setNewTitle] = useState('')
    const arrayMapMethods = props.tasks.map(t => {
        const onClickRemoveTaskHandler = () => {
            props.removeTask(t.id)
        }
        return (
            <li key={t.id}>
                <input type="checkbox"
                       checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={onClickRemoveTaskHandler}>x
                </button>
            </li>)
    })
    const onClickAddTitleHandler = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onClickAddTitleHandler()
        }
    }
    const onChangeNewTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }
    const onClickAll = () => {props.changeFilter('all')}
    const onClickActive = () => {props.changeFilter('active')}
    const onClickCompleted = () => {props.changeFilter('completed')}
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={newTitle}
                    onChange={onChangeNewTitle}
                    onKeyPress={onKeyPressHandler}
                />
                <button onClick={onClickAddTitleHandler}>+</button>
            </div>
            <ul>{arrayMapMethods}</ul>
            <div>
                <button onClick={onClickAll}>All</button>
                <button onClick={onClickActive}>Active</button>
                <button onClick={onClickCompleted}>Completed</button>
            </div>
        </div>
    );
};

