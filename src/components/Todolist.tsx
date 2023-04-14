import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterPropsType, TasksPropsType} from "../App";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Box, Button, ButtonGroup, Checkbox, IconButton, Stack} from "@mui/material";

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
    // const [onMouseColor, setOnMouseColor] = useState('#ffffff');
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
                <Button
                    color={'primary'}
                    variant={'text'}
                    size={'small'}
                    onClick={removeTodolistHandler}>
                    <DeleteForeverRoundedIcon fontSize={'medium'}/>
                </Button>

            </h2>
            <AddItemForm callback={(title) => {
                props.addTask(title, props.id)
            }}/>

            <div>
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
                    // const buttonColor = {background: `${onMouseColor}`}
                    // const onMouseEnterHandler = () => setOnMouseColor('#0000ff')
                    // const onMouseLeaveHandler = () => setOnMouseColor('#ffffff')
                    return (
                        <div key={el.id} className={el.isDone ? 'is-done' : ''}>
                            <Checkbox
                                color={'primary'}
                                checked={el.isDone}
                                onChange={onChangeTaskHandler}
                            />

                            <EditableSpan title={el.title} onChange={onChangeTitleHandler}/>
                            <Button
                               /* style={buttonColor}
                                onMouseEnter={onMouseEnterHandler}
                                onMouseLeave={onMouseLeaveHandler}*/
                                // aria-label={'delete'}
                                color={'primary'}
                                variant={'text'}
                                size={'small'}
                                onClick={removeTaskHandler}>
                                <DeleteForeverRoundedIcon fontSize={'medium'}/>
                            </Button>


                        </div>
                    )
                })}
            </div>
            <div>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <ButtonGroup color={'primary'} size={'medium'} variant={'outlined'}
                                 aria-label={'outlined button group'}>
                        <Button
                            variant={props.filter === 'all' ? 'contained' : 'outlined'}
                            onClick={onAllClickHandler}>All
                        </Button>
                        <Button
                            variant={props.filter === 'active' ? 'contained' : 'outlined'}
                            onClick={onActiveClickHandler}>Active
                        </Button>
                        <Button
                            variant={props.filter === 'completed' ? 'contained' : 'outlined'}
                            onClick={onCompletedClickHandler}>Completed
                        </Button>
                    </ButtonGroup>
                </Box>
            </div>

        </div>
    );
};
