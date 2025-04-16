import { ChangeEvent } from "react";
import './select.css';

interface Props {
    options?: Array<string | number>;
    name?: string | null;
    callback?: (value: string | null) => void;
}

const Select = (props: Props) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;

        props.callback?.(value);
    };

    return (
        <div className="sth-select-container">
            <select name={props.name ?? ''} className="sth-select" onChange={handleChange}>
                {
                    props.options?.map(option => (
                        <option key={option} className="sth-select-option" value={option}>{option}</option>
                    ))
                }
            </select>
        </div>
    );
}

export default Select;