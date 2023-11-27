import React from 'react';
import {FilterValueType} from "../App";
import {Button} from "./Button";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number)=> void
    changeFilter: (value: FilterValueType)=>void
}

export function Todolist(props: PropsType) {
    const onClickAllHandler = ()=>{props.changeFilter("all")}
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
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
        <div>
            <Button title={'All'} onClickHandler={()=>{}}/>
            <Button title={'Active'} onClickHandler={()=>{}}/>
            <Button title={'Completed'} onClickHandler={()=>{}}/>
            <button>-All-</button>
            <button onClick={() => {props.changeFilter("active")}}>Active</button>
            <button onClick={()=> {props.changeFilter("completed")}}>Completed</button>
        </div>
    </div>
}
