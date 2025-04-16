import './input.css';

interface Props {
    title?: string | null;
    value?: string | null;
    placeholder?: string | null;
    type?: string | null;
    onChange?: (value: string | null) => void;
}

const Input = (props: Props) => {
    return (
        <div className='sth-input-container'>
            <div className="sth-input-title">
                {props.title}
            </div>

            <input
                className='sth-input'
                type={props.type ?? 'text'}
                value={props.value ?? ''}
                placeholder={props.placeholder ?? ''}
                onChange={(event) => {
                    props.onChange?.(event.target.value)
                }}
            />
        </div>
    );
}

export default Input;