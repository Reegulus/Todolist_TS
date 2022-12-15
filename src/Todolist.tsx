import React from 'react';


export type TasksType = {
    id: string
    title: string
    isDone: boolean
}
export type TodolistTypeProps = {
    title: string
    tasks: Array<TasksType>
}

export function Todolist(props: TodolistTypeProps) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(t =>
                    <li key={t.id}>
                        <input type="checkbox"
                               checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button>x</button>
                    </li>
                )}
            </ul>
            <div>

                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

