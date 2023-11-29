import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType} from "../App";
import {Button} from "./Button";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    addTask: (newTitle: string)=>void
    removeTask: (id: string)=> void
    changeFilter: (value: FilterValueType)=>void
}

export function Todolist(props: PropsType) {

    const [title, setTitle] = useState('')
    const maxTitleLengthError = title.length >= 15

    const addTaskHandler = () => {
        props.addTask(title)
    setTitle('')
    }
    const onKeyDownAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
     e.key === 'Enter' && addTaskHandler()
    }
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>)=>{
        if(e.currentTarget.value.length <= 15) {
            setTitle(e.currentTarget.value)
        }
    }
    const mapPropsHandler = props.tasks.map(t => {
            const onClickButtonHandler = ()=>{props.removeTask(t.id)}
            return (
                <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <Button title={'✖️'} onClickHandler={onClickButtonHandler}/>
                </li>
            )
        }

    )
    const onClickHandlerAll = ()=>{props.changeFilter("all")}
    const onClickHandlerActive = ()=>{props.changeFilter("active")}
    const onClickHandlerCompleted = ()=>{props.changeFilter("completed")}


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                value={title}
                onChange={onChangeSetTitle}
                onKeyDown={onKeyDownAddTask}

            />
            <Button title={'+'}
                    onClickHandler={addTaskHandler}
                    disabled={!title || maxTitleLengthError}
            />
            {maxTitleLengthError && <div style={{color: 'red'}}>You have entered too many characters</div>}
        </div>
        <ul>
            {mapPropsHandler}
        </ul>

            <Button title={'All'} onClickHandler={onClickHandlerAll}/>
            <Button title={'Active'} onClickHandler={onClickHandlerActive}/>
            <Button title={'Completed'} onClickHandler={onClickHandlerCompleted}/>

    </div>
}
