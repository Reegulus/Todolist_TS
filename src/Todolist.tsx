import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterPropsType, TasksPropsType} from "./App";
import {Simulate} from "react-dom/test-utils";
import keyPress = Simulate.keyPress;

export type  TodolistPropsType = {
    title: string
    filter: FilterPropsType
    tasks: TasksPropsType[]
    addTask: (title: string)=> void
    removeTask: (taskId: string)=> void
    changeFilter: (value: FilterPropsType)=> void
    changeStatus: (taskId: string, isDone: boolean)=> void
}

export function Todolist(props: TodolistPropsType) {
    const [newTitle, setNewTitle] = useState('')
    const [error, setError] = useState<string | null>(null)


    const addTaskHandler =  () => {
        if(newTitle.trim() !== '') {
            props.addTask(newTitle)
            setNewTitle('')
        } else {
            setError(' Title is required')
        }


    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const onKeyPressInputHandler =  (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if(e.key === 'Enter') {
            addTaskHandler()
        }
    }
    const onAllClickHandler =  () => {props.changeFilter('all')}
    const onActiveClickHandler = () => {props.changeFilter('active')}
    const onCompletedClickHandler =  () => {props.changeFilter('completed')}
    return (
        <div>
            <h2>{props.title}</h2>
            <input
                className={error ? 'error' : ''}
                placeholder={'new text'}
                value={newTitle}
                onKeyPress={onKeyPressInputHandler}
                onChange={onChangeInputHandler}/>
            <button onClick={addTaskHandler}>+</button>
            {error && <div className={'error-message'}>{error}</div>}
            <ul>
                {props.tasks.map( (el) => {
                    const removeTaskHandler = () => {props.removeTask(el.id)}
                    const onChangeTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked
                        props.changeStatus(el.id, newIsDoneValue)
                    }
                    return (
                        <li key={el.id} className={el.isDone ?'is-done' : ''}>
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
                <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={onAllClickHandler}>All</button>
                <button className={props.filter === 'active' ? 'active-filter' : ''} onClick={onActiveClickHandler}>Active</button>
                <button className={props.filter === 'completed' ? 'active-filter' : ''} onClick={onCompletedClickHandler}>Completed</button>
            </div>

        </div>
    );
};
