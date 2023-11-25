import React from 'react';
import styles from './Button.module.css'

type PropsType = {
    name: string,
    callBack: () => void
    disabled?: boolean
    className: string
}

export const Button = (props: PropsType) => {
    const finalClassName = props.className && styles[props.className]
    return (
        // <Button variant="contained"
        //         size={'small'}
        //         className={finalClassName}
        //         onClick={props.callBack}
        //         disabled={props.disabled}>
        //     {props.name}
        // <AddIcon/>
        //
        // </Button>
        <button name={props.name}
                className={finalClassName}
                onClick={props.callBack}
                disabled={props.disabled}>

            {props.name}

        </button>
    );
};



