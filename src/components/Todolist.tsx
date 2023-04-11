import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterPropsType, TasksPropsType} from "../App";
import {Simulate} from "react-dom/test-utils";
import keyPress = Simulate.keyPress;
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";

export type  TodolistPropsType = {
    id: string
    title: string
    filter: FilterPropsType
    tasks: TasksPropsType[]
    addTask: (title: string, todolistId: string)=> void
    removeTask: (taskId: string, todolistId: string)=> void
    changeFilter: (value: FilterPropsType, todolistId: string)=> void
    changeStatus: (taskId: string, isDone: boolean, todolistId: string)=> void
    changeTasksTitle: (taskId: string, newTitle: string, todolistId: string)=> void
}

export function Todolist(props: TodolistPropsType) {
    const removeTodolistHandler = () => {}
    const onAllClickHandler =  () => {props.changeFilter('all', props.id)}
    const onActiveClickHandler = () => {props.changeFilter('active', props.id)}
    const onCompletedClickHandler =  () => {props.changeFilter('completed', props.id)}
    return (
        <div>
            <h2>{props.title}
                <button onClick={removeTodolistHandler}>+</button>
            </h2>
            <AddItemForm callback={(title)=>{props.addTask(title, props.id)}}  />

            <ul>
                {props.tasks.map( (el) => {
                    const removeTaskHandler = () => {props.removeTask(el.id, props.id)}
                    const onChangeTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked
                        props.changeStatus(el.id, newIsDoneValue, props.id)
                    }
                    const onChangeTitleHandler = (newValue: string) => {
                        props.changeTasksTitle(el.id, newValue, props.id)
                    }
                    return (
                        <li key={el.id} className={el.isDone ?'is-done' : ''}>
                            <input
                                type="checkbox"
                                checked={el.isDone}
                                onChange={onChangeTaskHandler}
                            />
                            <EditableSpan title={el.title} onChange={onChangeTitleHandler}/>
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
