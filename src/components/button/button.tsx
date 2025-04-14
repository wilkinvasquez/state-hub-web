import {MouseEventHandler, useEffect, useState} from "react";
import './button.css';

interface Props {
    title?: string;
    buttonClassName?: string | null; 
    showLoading?: boolean;
    disabled?: boolean;
    callback?: MouseEventHandler
}

const Button = (props: Props) => {
    const [showLoading, setShowLoading] = useState<boolean | null | undefined>(false);
    const [disabled, setDisabled] = useState<boolean | null | undefined>(false);
    
    useEffect(() => {
        setShowLoading(props.showLoading);
    }, [props.showLoading]);

    useEffect(() => {
        setDisabled(props.disabled);
    }, [props.disabled]);
    
    return (
        <button
            className={(props.buttonClassName ?? '') + (disabled ? ' sth-button-disabled' : '')}
            disabled={disabled ?? false}
            onClick={props.callback}
        >
            {
                showLoading
                    ?
                    <img
                        className={'sth-button-loading'}
                        src={'loading.svg'}
                        alt="loading"
                    />
                    :
                    <span className={'sth-button-title'}>
                        {props.title}
                    </span>
            }
        </button>
    )
}

export default Button;