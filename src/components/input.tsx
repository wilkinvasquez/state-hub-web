import { ChangeEvent, useEffect, useState } from 'react';
import './input.css';

interface Props {
    title?: string | null;
    value?: string | null;
    type?: string | null;
    callback?: (value: string | null) => void;
}

const Input = (props: Props) => {
    const [newValue, setNewValue] = useState<string | null>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;

        setNewValue(newValue);
    }

    useEffect(() => {
        if(newValue !== props.value){
            props.callback?.(newValue);
        }
    }, [props, newValue]);

    return (
        <div className='sth-input-container'>
            <div className="sth-input-title">
                {props.title}
            </div>

            <input
                className='sth-input'
                type={props.type ?? 'text'}
                value={props.value ?? ''}
                onChange={handleChange}
            />
        </div>
    );
}

export default Input;