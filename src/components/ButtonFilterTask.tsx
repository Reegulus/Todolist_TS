import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterPropsType, TasksPropsType} from "../App";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Box, Button, ButtonGroup, Checkbox, FormControlLabel, IconButton, Stack} from "@mui/material";

export type  ButtonDeleteTaskPropsType = {
id: string
    filter: FilterPropsType
    changeFilter: (value: FilterPropsType, todolistId: string) => void
}

export function ButtonFilterTask(props: ButtonDeleteTaskPropsType) {
    const onAllClickHandler = () => {
        props.changeFilter('all', props.id)
    }
    const onActiveClickHandler = () => {
        props.changeFilter('active', props.id)
    }
    const onCompletedClickHandler = () => {
        props.changeFilter('completed', props.id)
    }

    return  <Box
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
};
