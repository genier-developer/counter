import React, { ChangeEvent } from 'react';
import styles from './Input.module.css';

type InputPropsType = {
    type: string;
    callBack: (value: string) => void;
    className: string;
    value?: number;
};

export const Input = (props: InputPropsType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        props.callBack(value);
    };

    const finalClassName = props.className && styles[props.className];

    return (
        <input
            value={props.value}
            type={props.type}
            className={finalClassName}
            onChange={onChangeHandler}
        />
    );
};
