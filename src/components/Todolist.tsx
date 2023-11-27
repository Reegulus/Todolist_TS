import React, {useState} from 'react';
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
    const [value, setValue] = useState('')
    const addTaskHandler = () => {props.addTask(value)
    setValue('')
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={value} onChange={(e)=>{
                setValue(e.currentTarget.value)
            }}/>
            <Button title={'+'}
                    onClickHandler={addTaskHandler}
            />
        </div>
        <ul>
            {props.tasks.map(t =>
                <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <Button title={'✖️'} onClickHandler={()=>{props.removeTask(t.id)}}/>
                </li>
            )}

        </ul>

            <Button title={'All'} onClickHandler={()=>{props.changeFilter("all")}}/>
            <Button title={'Active'} onClickHandler={()=>{props.changeFilter("active")}}/>
            <Button title={'Completed'} onClickHandler={()=>{props.changeFilter("completed")}}/>

    </div>
}
