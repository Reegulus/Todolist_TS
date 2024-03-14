import React from 'react';

type ButtonPropsType = {
    title: string
}

export function Button ({title}: ButtonPropsType) {
    return (
        <button type="submit">{title}</button>
    )
}