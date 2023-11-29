import React from 'react';
import {FilterValueType} from "../App";

type PropsType = {
    title: string
    onClickHandler?: () => void
}

export function Button(props: PropsType) {
    return <button
        onClick={props.onClickHandler}
    >{props.title}
    </button>

}
