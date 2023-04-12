import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterPropsType, TasksPropsType} from "../App";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, IconButton} from "@mui/material";

export type  TodolistPropsType = {
    id: string
    title: string
    tasks: TasksPropsType[]
    filter: FilterPropsType
    removeTodolist: (todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterPropsType, todolistId: string) => void
    changeTodolistTitle: (todolistId: string, newTitle: string) => void
    changeStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    changeTasksTitle: (taskId: string, newTitle: string, todolistId: string) => void
}

export function Todolist(props: TodolistPropsType) {
    const removeTodolistHandler = () => {
        props.removeTodolist(props.id)
    }
    const onChangeTodolistTitleHandler = (newTitle: string) => {
        props.changeTodolistTitle(props.id, newTitle)
    }
    const onAllClickHandler = () => {
        props.changeFilter('all', props.id)
    }
    const onActiveClickHandler = () => {
        props.changeFilter('active', props.id)
    }
    const onCompletedClickHandler = () => {
        props.changeFilter('completed', props.id)
    }
    return (
        <div>
            <h2>
                <EditableSpan title={props.title} onChange={onChangeTodolistTitleHandler}/>
                <IconButton aria-label={'delete'} color={'inherit'} size={'large'} onClick={removeTodolistHandler}>
                    <DeleteForeverRoundedIcon fontSize={'large'}/>
                </IconButton>
            </h2>
            <AddItemForm callback={(title) => {
                props.addTask(title, props.id)
            }}/>

            <ul>
                {props.tasks.map((el) => {
                    const removeTaskHandler = () => {
                        props.removeTask(el.id, props.id)
                    }
                    const onChangeTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked
                        props.changeStatus(el.id, newIsDoneValue, props.id)
                    }
                    const onChangeTitleHandler = (newValue: string) => {
                        props.changeTasksTitle(el.id, newValue, props.id)
                    }
                    return (
                        <li key={el.id} className={el.isDone ? 'is-done' : ''}>
                            <input
                                type="checkbox"
                                checked={el.isDone}
                                onChange={onChangeTaskHandler}
                            />
                            <EditableSpan title={el.title} onChange={onChangeTitleHandler}/>
                            <IconButton aria-label={'delete'} color={'inherit'} size={'large'}
                                        onClick={removeTaskHandler}>
                                <DeleteForeverRoundedIcon fontSize={'large'}/>
                            </IconButton>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button className={props.filter === 'all' ? 'active-filter' : ''}
                        onClick={onAllClickHandler}>All
                </button>
                <button className={props.filter === 'active' ? 'active-filter' : ''}
                        onClick={onActiveClickHandler}>Active
                </button>
                <button className={props.filter === 'completed' ? 'active-filter' : ''}
                        onClick={onCompletedClickHandler}>Completed
                </button>
            </div>

        </div>
    );
};
