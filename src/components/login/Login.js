import React , { useState  } from 'react';
import TextField from '../../style/common/TextField';
import Label from '../../style/common/Label';
import Button from '../../style/common/Button';
import { getLogin } from '../../api/login/login';
import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from 'react-redux';
import { MessageModal , SignUpModel } from '../../slice/modal/ModalSlice';
import MassageModal from './modal/Massage';
import SignUpModal from './modal/SignUp';
import '../../style/common/Login.css';

const Login = () => {

    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const MModel = useSelector((state) => state.modal.value.MessageModal);
    const SModel = useSelector((state) => state.modal.value.SignUpModel);
    const dispatch = useDispatch();
    const [massage, setMassage]  =useState('');

    const onSetTitle = (e) => {
        setLoginId(e.target.value);
    };
    const onSetassword = (e) => {
        setPassword(e.target.value);
    };
    
    const handleLogin = () =>{
        if(loginId===""){
            dispatch(MessageModal(true));
            setMassage("아이디를 입력해주세요");
            return;
        }else if(password===""){
            dispatch(MessageModal(true));
            setMassage("비밀번호 입력해주세요");
            return;
        }
        const data = {params : { "loginId": loginId , "password" :password} };
        getLogin(data)
        .then((response) => {
            if(response.data==="로그인성공"){
                navigate("/Counter");
            }else{
                setMassage(response.data);
                dispatch(MessageModal(true));
            }
        })
    }

    return (
        <div className="Login">
            <div className="LoginFrom">
                <div style={{ display:'flex' }}>
                    <div style={{ width:'170px' }}><Label text='loginId' type='login' required={true}></Label></div>
                    <div style={{ width:'350px' }}><TextField value={loginId || ""}  width="100%"  placeholder='ID를 입력하세요' onChange={onSetTitle}/></div>
                </div>
                <div style={{ height:'30px' }}></div>
                <div style={{ display:'flex' }}>
                    <div style={{ width:'170px' }}><Label text='Password' type='login' required={true}></Label></div>
                    <div style={{ width:'350px' }}><TextField value={password || ""} width="100%" type="password" placeholder='비밀번호를 입력하세요' onChange={onSetassword}/></div>
                </div>
                <div style={{ height:'30px' }}></div>
                <div style={{ display:'flex' }}>
                    <div style={{ width:'150px' }}><Button size='lg' text='로그인' textColor='white' onClick={handleLogin} cType='default'></Button></div>
                    <div style={{ width:'35px' }}></div>
                    <div style={{ width:'150px' }}><Button size='lg' text='회원가입' textColor='white' cType='default' onClick={() => dispatch(SignUpModel(true))}></Button></div>
                    <div style={{ width:'35px' }}></div> 
                    <div style={{ width:'150px' }}><Button size='lg' text='회원정보찾기' textColor='white'  cType='default'></Button></div>
                </div>
            </div>
            {MModel &&
                <div className='Massage_Modal_Container'>
                <div className='Massage_Modal'>
                    <MassageModal type="login" title="로그인" massage={massage}/>
                </div> 
                </div> 
            }
            {SModel &&
                <div className='SignUp_Modal_Container'>
                <div className='SignUp_Modal'>
                    <SignUpModal/>
                </div> 
                </div> 
            }
        </div>
    )
}

export default Login;
