import React, {useState} from 'react';
import {FilterPropsType, TasksPropsType} from "./App";

export type  TodolistPropsType = {
    title: string
}

export function Todolist(props: TodolistPropsType) {

    return (
        <div>
            <h2>{props.title}</h2>
            <input type="text"/>
            <button>+</button>
        </div>
    );
};
