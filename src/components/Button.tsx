import React, {FC} from 'react';
import {FilterValueType} from "../App";

type ButtonPropsType = {
    title: string
    onClickHandler?: () => void
    disabled?: boolean
}

export const Button: FC<ButtonPropsType> = (props) => {
    return <button
        onClick={props.onClickHandler}
        disabled={props.disabled}
    >{props.title}
    </button>

}
