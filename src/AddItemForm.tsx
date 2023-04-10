import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterPropsType, TasksPropsType} from "./App";
import {Simulate} from "react-dom/test-utils";
import keyPress = Simulate.keyPress;

export type  SuperInputType = {
    callback: (title: string)=> void
}

export function AddItemForm(props: SuperInputType) {
    const [newTitle, setNewTitle] = useState('')
    const [error, setError] = useState<string | null>(null)


    const addTaskHandler =  () => {
        if(newTitle.trim() !== '') {
            props.callback(newTitle)
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
    return (
        <div>
            <input
                className={error ? 'error' : ''}
                placeholder={'new text'}
                value={newTitle}
                onKeyPress={onKeyPressInputHandler}
                onChange={onChangeInputHandler}/>
            <button onClick={addTaskHandler}>+</button>
            {error && <div className={'error-message'}>{error}</div>}

        </div>
    );
};
