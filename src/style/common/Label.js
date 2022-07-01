import React from "react";
import './Label.css';

const Label = ({ text, type , required }) => {

    return (
        <div style={{display:'inline-block'}}>
            {type ==='login' &&
                <div className="LabelLogin" >
                    {text}{required === true && <span style={{ height: '100%', color:'#ED5255'}}>   *</span>}
                </div>
            }
            {type ==='signUp' &&
                <div className="Label" >
                    {text}{required === true && <span style={{ height: '100%', color:'#ED5255'}}>   *</span>}
                </div>
            }
        </div>
    )
}

export default Label;