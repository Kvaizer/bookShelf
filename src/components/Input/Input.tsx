import React, {ChangeEvent, useState} from 'react';
import s from './Input.module.css'

type InputProps = {
    onChange: (x: any) => void
    value: string | number
    title: string
}

const Input: React.FC<InputProps> = ({onChange, value}) => {
    const [initialValue, setValue] = useState<string | number>(value)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    const onBlurHandler = () => {
        onChange(initialValue)
    }

    return (
        <div>
            <input className={s.superInput}
                   value={initialValue}
                   onChange={onChangeHandler}
                   onBlur={onBlurHandler}/>
        </div>

    );
};

export default Input;