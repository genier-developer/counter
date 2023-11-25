import React from 'react';
import styles from './Display.module.css'

type PropsType = {
    isError?: boolean
    className?: string
    name: number
}
export const Display = (props: PropsType) => {
    const resultClassName =
        `${styles.Display} 
        ${props.isError && styles.DisplayError} 
        ${props.className && props.className}`
    return (
        <div className={resultClassName}>
            {props.name}
        </div>
    );
};

