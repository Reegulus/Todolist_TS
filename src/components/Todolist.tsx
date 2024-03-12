import React from 'react';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TaskType>
}

export function Todolist({title, tasks}: PropsType) {

    return <div>

        <h3>{title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                tasks.length === 0 ? (
                    <p>No tasks</p>
                ) : (
                    <ul>
                        {tasks.map((task: TaskType) => {
                            return (
                                <li>
                                    <input type="checkbox" checked={task.isDone}/>
                                    <span>{task.title}</span>
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
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>
}
