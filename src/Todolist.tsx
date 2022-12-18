import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterForTodo, TasksType} from "./App";

export type TodolistTypeProps = {
    title: string
    tasks: Array<TasksType>
    addTask: (title: string) => void
    filter: FilterForTodo
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterForTodo) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

export function Todolist(props: TodolistTypeProps) {
    const [newTitle, setNewTitle] = useState('')
    const [error, setError] = useState<string | null>(null)
    const arrayMapMethods = props.tasks.map(t => {
        const onRemoveTaskHandler = () => {
            props.removeTask(t.id)
        }
        const onChangeTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(t.id, e.currentTarget.checked)
        }
        return (
            <li className={t.isDone ? 'is-done' : ''} key={t.id}>
                <input type="checkbox"
                       onChange={onChangeTaskHandler}
                       checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={onRemoveTaskHandler}>x
                </button>
            </li>)
    })
    const onClickAddTitleHandler = () => {
        if (newTitle.trim() !== '') {
            props.addTask(newTitle.trim())
            setNewTitle('')
        } else  {
            setError('Title is required')
        }

    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (event.key === 'Enter') {
            onClickAddTitleHandler()
        }
    }
    const onChangeNewTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }
    const onClickAll = () => {
        props.changeFilter('all')
    }
    const onClickActive = () => {
        props.changeFilter('active')
    }
    const onClickCompleted = () => {
        props.changeFilter('completed')
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    className={error ? 'error' : ''}
                    value={newTitle}
                    onChange={onChangeNewTitle}
                    onKeyPress={onKeyPressHandler}
                />
                <button onClick={onClickAddTitleHandler}>+</button>
                {error && <div className={'error-message'}>{error}</div>}
            </div>
            <ul>{arrayMapMethods}</ul>
            <div>
                <button className={props.filter === "all" ? 'active-filter' : ''} onClick={onClickAll}>All</button>
                <button className={props.filter === "active" ? 'active-filter' : ''} onClick={onClickActive}>Active</button>
                <button className={props.filter === "completed" ? 'active-filter' : ''} onClick={onClickCompleted}>Completed</button>
            </div>
        </div>
    );
};

