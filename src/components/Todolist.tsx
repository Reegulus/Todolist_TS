import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterPropsType, TasksPropsType} from "../App";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Box, Button, ButtonGroup, Checkbox, FormControlLabel, IconButton, Stack} from "@mui/material";
import {ButtonDeleteTask} from "./ButtonDeleteTask";
import {ButtonFilterTask} from "./ButtonFilterTask";

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

    return (
        <div>
            <h2>
                <EditableSpan title={props.title} onChange={onChangeTodolistTitleHandler}/>
                <ButtonDeleteTask id={props.id} callback={(newTitle: string) => {props.removeTodolist(props.id)}}/>
            {/*    <Button
                    color={'primary'}
                    variant={'text'}
                    size={'small'}
                    onClick={removeTodolistHandler}>
                    <DeleteForeverRoundedIcon fontSize={'medium'}/>
                </Button>*/}

            </h2>
            <AddItemForm callback={(title) => {
                props.addTask(title, props.id)
            }}/>

            <div>
                {props.tasks.map((el) => {

                   /* const removeTaskHandler = () => {
                        props.removeTask(el.id, props.id)
                    }*/
                    const onChangeTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked
                        props.changeStatus(el.id, newIsDoneValue, props.id)
                    }
                    const onChangeTitleHandler = (newValue: string) => {
                        props.changeTasksTitle(el.id, newValue, props.id)
                    }
                    return (
                        <div key={el.id} className={el.isDone ? 'is-done' : ''}>
                            <Checkbox
                                color={'primary'}
                                checked={el.isDone}
                                onChange={onChangeTaskHandler}
                            />
                            <EditableSpan title={el.title} onChange={onChangeTitleHandler}/>
                            <ButtonDeleteTask
                                key={el.id}
                                id={el.id}
                                callback={(id: string) => {props.removeTask(el.id, props.id)}}
                            />
                        </div>
                    )
                })}
            </div>
            <div>
                <ButtonFilterTask
                    key={props.id}
                    id={props.id}
                    filter={props.filter}
                    changeFilter={props.changeFilter}
                />
            </div>

        </div>
    );
};
