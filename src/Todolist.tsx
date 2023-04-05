import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterPropsType, TasksPropsType} from "./App";
import {Simulate} from "react-dom/test-utils";
import keyPress = Simulate.keyPress;

export type  TodolistPropsType = {
    title: string
    tasks: TasksPropsType[]
    addTask: (title: string)=> void
    removeTask: (taskId: string)=> void
    changeFilter: (value: FilterPropsType)=> void
    changeStatus: (taskId: string, isDone: boolean)=> void
}

export function Todolist(props: TodolistPropsType) {
    const [newTitle, setNewTitle] = useState('')


    const addTaskHandler =  () => {
        props.addTask(newTitle)
        setNewTitle('')
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const onKeyPressInputHandler =  (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            addTaskHandler()
        }}
    const onAllClickHandler =  () => {props.changeFilter('all')}
    const onActiveClickHandler = () => {props.changeFilter('active')}
    const onCompletedClickHandler =  () => {props.changeFilter('completed')}
    return (
        <div>
            <h2>{props.title}</h2>
            <input
                placeholder={'new text'}
                value={newTitle}
                onKeyPress={onKeyPressInputHandler}
                onChange={onChangeInputHandler}/>
            <button onClick={addTaskHandler}>+</button>
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
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>

        </div>
    );
};
