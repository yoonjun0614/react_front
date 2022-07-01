import React , { useEffect , useState } from "react";
import './Button.css';

const Label = ({ text, size , color ,onClick , cType , textColor}) => {

    const [width, setWidth] = useState('');
    const [minWidth, setMinWidth] = useState('');
    const [height, setHeight] = useState('');
    const [fontSize, setFontSize] = useState('');
    const [fontWeight, setFontWeight] = useState('');
    useEffect(()=>{

        if(size === 'lg'){
            setWidth('150px');
            setMinWidth('50px');
            setHeight('48px');
            setFontSize('16px');
            setFontWeight(400);
        }else if(size === 'md'){
            setWidth('120px');
            setMinWidth('50px');
            setHeight('42px');
            setFontSize('16px');
            setFontWeight(400);
        }else if(size === 'sm'){
            setWidth('52px');
            setMinWidth('52px');
            setHeight('28px');
            setFontSize('12px');
            setFontWeight(300);
        }
    }, [text,size]);

    return (
        <div style={{display:'inline-block'}}>
            <div className="button" style={{ color:textColor, width:width ,minWidth : minWidth , height : height, fontSize: fontSize, fontWeight:fontWeight ,backgroundColor:color}} onClick={(e) => cType !== 'disable' && (onClick && onClick())}>
                {text}
            </div>
        </div>
    )
}

export default Label;