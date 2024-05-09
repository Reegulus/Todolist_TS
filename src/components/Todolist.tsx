import React from 'react';
import {Button} from "./Button";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number)=> void
}

export function Todolist({title, tasks,removeTask}: PropsType) {

    return <div>

        <h3>{title}</h3>
        <div>
            <input/>
            <Button title={'+'}/>
        </div>
        <ul>
            {
                tasks.length === 0
                    ?
                    (<p>No tasks</p>)
                    :
                    (
                        <ul>
                            {tasks.map((task: TaskType) => {
                                return (
                                    <li>
                                        <input type="checkbox" checked={task.isDone}/>
                                        <span>{task.title}</span>
                                           <button
                                               onClick={ () => {removeTask(task.id)}}>x</button>
                                    </li>
                                )
                            })}
                        </ul>
                    )
            }
            {/*<li><input type="checkbox" checked={tasks[1].isDone}/> <span>{tasks[1].title}</span></li>
            <li><input type="checkbox" checked={tasks[2].isDone}/> <span>{tasks[2].title}</span></li>*/}
        </ul>
        <div>
            <Button title={'All'}/>
            <Button title={'Active'}/>
            <Button title={'Completed'}/>
        </div>
    </div>
}
