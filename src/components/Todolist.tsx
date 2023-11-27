import React from 'react';
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
    addTask: (title: string)=>void
    removeTask: (id: string)=> void
    changeFilter: (value: FilterValueType)=>void
}

export function Todolist(props: PropsType) {
    const onClickAllHandler = ()=>{props.changeFilter("all")}
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <Button title={'+'} onClickHandler={()=>{props.addTask(props.title)}}/>
        </div>
        <ul>
            {props.tasks.map(t =>
                <li>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <Button title={'✖️'} onClickHandler={()=>{props.removeTask(t.id)}}/>
                    {/*<button onClick={() => {props.removeTask(t.id)}}>✖️</button>*/}
                </li>
            )}

        </ul>

            <Button title={'All'} onClickHandler={()=>{props.changeFilter("all")}}/>
            <Button title={'Active'} onClickHandler={()=>{props.changeFilter("active")}}/>
            <Button title={'Completed'} onClickHandler={()=>{props.changeFilter("completed")}}/>

    </div>
}
