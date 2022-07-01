import React , { useEffect, useState } from "react";
import './TextField.css';

const TextField = ({ type, width, value, placeholder, disabled, onChange, onKeydown}) => {

    const [textShowMode, setTextShowMode] = useState(true);

    useEffect(()=>{
        type === 'password' && setTextShowMode(false)
    }, [type, width, value, placeholder, disabled, onChange, onKeydown]);

    return (
        <div style={{display:'inline-block', maxHeight:'58px', width:(width && width!=='')? width: '200px'}}>
            <input className="TextBox" type={!textShowMode ? 'password': 'text'} placeholder={placeholder} disabled={disabled} value={value} onChange={onChange} onKeyDown={onKeydown}></input>
        </div>

    )
}

export default TextField;