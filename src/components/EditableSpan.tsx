import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {TextField} from "@mui/material";

type EditableSpanPropsType = {
    title: string
    onChange: (newValue: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)
    const activeEditMode = () => {
        setEditMode(!editMode)
        setTitle(props.title)
        props.onChange(title)
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            activeEditMode()
        }
    }

    return (
        editMode
            ?
            <TextField
                variant={'standard'}
                value={title}
                onChange={onChangeTitleHandler}
                onBlur={activeEditMode} onKeyPress={onKeyPressHandler}
                autoFocus type="text"/>
            : <span onDoubleClick={activeEditMode}>{props.title}</span>

    )
}