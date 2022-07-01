import React from "react";
import { MessageModal , SignUpMessageModal } from '../../../slice/modal/ModalSlice';
import { useDispatch } from 'react-redux';
import './Massage.css';

const MassageModal = ({type,title,massage}) => {
    
    const dispatch = useDispatch();
    return (
        <div className="Massage_Modal_dal">
            <h3 className="Massage_Modal_title">
                {title}
            </h3>
            <div className="Massage_Modal_context">
                {massage}
            </div>
            <div className="Massage_Modal_height"></div>
            {type==="login" &&
                <div className="Massage_Modal_check" onClick={() => dispatch(MessageModal(false))}>
                    확인
                </div>
            }
            {type==="SignUp" &&
                <div className="Massage_Modal_check" onClick={() => dispatch(SignUpMessageModal(false))}>
                    확인
                </div>
            }
        </div>
    )
}
export default MassageModal;