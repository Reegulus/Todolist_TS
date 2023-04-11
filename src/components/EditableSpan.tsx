import React, {ChangeEvent, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

type EditableSpanPropsType = {
    title: string
    onChange: (newValue: string) =>void
}

export function EditableSpan(props: EditableSpanPropsType) {
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState('')
const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
}
    const activeEditMode = () => {
        setEditMode(!editMode)
        setTitle(props.title)
        props.onChange(title)
    }
    return (
        editMode
        ? <input value={title} onChange={onChangeTitleHandler} onBlur={activeEditMode} autoFocus type="text"/>
            : <span onDoubleClick={activeEditMode}>{props.title}</span>
    )
}