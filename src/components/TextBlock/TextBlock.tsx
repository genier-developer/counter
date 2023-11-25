import React from 'react';
import styles from './TextBlock.module.css'

type TextBlockProps = {
    className: string,
    text: string
}
export const TextBlock = (props: TextBlockProps) => {
    const finalClassName = props.className && styles[props.className]

    return (
        <div className={finalClassName}>{props.text}

        </div>
    );
};

