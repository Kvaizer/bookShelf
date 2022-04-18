import React from 'react';
import s from './Buttons.module.css'

type ButtonProps = {
    title: string
    callBack: () => void
}

const Button: React.FC<ButtonProps> = ({title, callBack}) => {

    return (
        <div><button className={s.default} onClick={callBack}>{title}</button></div>
    );
};

export default Button;