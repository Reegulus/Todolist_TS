import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterPropsType, TasksPropsType} from "../../App";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import {AddItemForm} from "../AddItemForm";
import {EditableSpan} from "../EditableSpan";
import {Box, Button, ButtonGroup, Checkbox, FormControlLabel, IconButton, Stack} from "@mui/material";

export type  TaskPropsType = {
    id: string
    callback: (id: string) => void
}

export function ButtonDeleteTask(props: TaskPropsType) {
    const [onMouseColor, setOnMouseColor] = useState(false);
    const removeTaskHandler = () => {
        props.callback(props.id)
    }
    const onMouseEnterHandler = () => setOnMouseColor(true)
    const onMouseLeaveHandler = () => setOnMouseColor(false)

    return <Button
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        color={onMouseColor ? 'error' : 'primary'}
        variant={'text'}
        size={'medium'}
        onClick={removeTaskHandler}>
        <DeleteForeverRoundedIcon fontSize={'medium'}/>
    </Button>
};
