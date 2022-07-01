import React , { useState , useEffect } from "react";
import Label from "../../../style/common/Label";
import Button from "../../../style/common/Button";
import TextField from "../../../style/common/TextField";
import { postSignUp } from '../../../api/signUp/signUp';
import { getSignUpIdCheck } from '../../../api/login/login';

import { SignUpMessageModal , SignUpModal} from "../../../slice/modal/ModalSlice";
import { useDispatch , useSelector} from "react-redux";
import MassageModal from "../modal/Massage";
import "./SignUp.css";

const SignModal = () => {
    
    const dispatch = useDispatch();// eslint-disable-line no-unused-vars
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [massage, setMassage]  =useState("");
    const [passwordVoid, setPasswordVoid] = useState(true);
    const [idcheck , setIdcheck] = useState("");
    const [impossible , setImpossible] = useState(false);
    const [idInsertFlag , setIdInsertFlag] = useState(false);
    const MeModel = useSelector((state) => state.modal.value.SignUpMessageModal);
    
    useEffect(() => {
        if(idInsertFlag===true && MeModel ===false){
            dispatch(SignUpModal(false));
        };
    }, [idInsertFlag , MeModel]); // eslint-disable-line react-hooks/exhaustive-deps

    const onSetTitle = (e) => {
        if (e.target.value.length > 15) {
            setMassage("아이디는 15자를 초과할수 없습니다");
            dispatch(SignUpMessageModal(true));
            return;
        } else {
            setLoginId(e.target.value);
        }
    };

    const handleSignUp = (e) => {
        if(impossible===false){
            setMassage("아이디 중복 체크를 해주세요");
            dispatch(SignUpMessageModal(true));
            return;
        }else if(loginId===""|| loginId===undefined){
            setMassage("아이디를 입력하세요");
            dispatch(SignUpMessageModal(true));
            return;
        }else if(password===""|| password===undefined){
            setMassage("비밀번호를 입력하세요");
            dispatch(SignUpMessageModal(true));
            return;
        }else if(name===""|| name===undefined){
            setMassage("이름을 입력하세요");
            dispatch(SignUpMessageModal(true));
            return;
        }else if(email===""|| email===undefined){
            setMassage("이메일을 입력하세요");
            dispatch(SignUpMessageModal(true));
            return;
        }else if(phone===""|| phone===undefined){
            setMassage("핸드폰번호를 입력하세요");
            dispatch(SignUpMessageModal(true));
            return;
        }
        const idRegex = /[a-z0-9]{4,15}$/;
        if(!idRegex.test(loginId)) {
            setMassage("아이디는 영어,숫자 4자이상 15자 이하 사용 가능합니다");
            dispatch(SignUpMessageModal(true));
            return;
        }
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        if(!passwordRegex.test(password)) {
            setMassage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요");
            dispatch(SignUpMessageModal(true));
            return;
        }
        const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/;
        if(!phoneRegex.test(phone)) {
            setMassage("핸드폰번호 양식이아닙니다");
            dispatch(SignUpMessageModal(true));
            return;
        }
        const emailRegex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
        if(!emailRegex.test(email)) {
            setMassage("이메일 양식이 아닙니다");
            dispatch(SignUpMessageModal(true));
            return;
        }
        const formData = new FormData();
        formData.append('loginId',loginId);
        formData.append('password',password);
        formData.append('name',name);
        formData.append('email',email);
        formData.append('phone',phone);
        postSignUp(formData)
        .then((response) => {
            if(response.status===200){
                setMassage("아이디 등록성공");
                dispatch(SignUpMessageModal(true));
                setIdInsertFlag(true);
            }else{
                setMassage("아이디 등록실패");
                dispatch(SignUpMessageModal(true));
            }
        })

    }
    const handleSignUpIdCheck = (e) => {
        if(loginId===""|| loginId===undefined){
            setMassage("아이디를 입력하세요");
            dispatch(SignUpMessageModal(true));
            return;
        }
        const idRegex = /[a-z0-9]{4,15}$/;
        if(!idRegex.test(loginId)) {
            setMassage("아이디는 영어 4자이상 15자 이하 사용 가능합니다");
            dispatch(SignUpMessageModal(true));
            return;
        }
        const data = {params : { "loginId": loginId } };
        getSignUpIdCheck(data)
        .then((response) => {
            setIdcheck(response.data);
            if(response.data==="해당 아이디는 사용중입니다"){
                setImpossible(false);
            }else{
                setImpossible(true);
            }
        })
    }
    

    return (
        <div className="SignUp_Modal_dal">
            <h3 className="SignUp_Modal_title">
                회원가입
            </h3>
            <div className="MSignUp_Modal_context">
                <div style={{ display:"flex" }}>
                    <div style={{ width:"170px" }}><Label type="signUp" text="아이디" required={true}></Label></div>
                    <div style={{ width:"330px" }}><TextField value={loginId || ""}  width="100%"  placeholder="ID를 입력하세요" onChange={onSetTitle}/></div>
                    <div style={{ width:"150px" }}><Button size="lg" text="중복확인" textColor="black" color="" cType="default" onClick={handleSignUpIdCheck}></Button></div>
                </div>
            </div>
            <div className="SignUp_Modal_height">
                {impossible &&
                    <div className="SignUp_Modal_Idcheck">{idcheck}</div>
                }
                {!impossible &&
                    <div className="SignUp_Modal_Idcheck_Impossible">{idcheck}</div>
                }
                
            </div>
            <div className="MSignUp_Modal_context">
                <div style={{ display:"flex" }}>
                    <div style={{ width:"170px" }}><Label type="signUp" text="비밀번호" required={true}></Label></div>
                    {passwordVoid &&
                        <div style={{ width:"330px" }}><TextField value={password || ""}  type="password" width="100%"  placeholder="비밀번호를 입력하세요" onChange={(e) => setPassword(e.target.value)}/></div>
                    }
                    {!passwordVoid &&
                        <div style={{ width:"330px" }}><TextField value={password || ""}  width="100%"  placeholder="비밀번호를 입력하세요" onChange={(e) => setPassword(e.target.value)}/></div>
                    }
                    <div style={{ width:"150px" }}><Button size="lg" text="비밀번호보기" textColor="black" color="" cType="default" onClick={(e) => setPasswordVoid(!passwordVoid)}></Button></div>
                </div>
            </div>
            <div className="SignUp_Modal_height"></div>
            <div className="MSignUp_Modal_context">
                <div style={{ display:"flex" }}>
                    <div style={{ width:"170px" }}><Label type="signUp" text="이름" required={true}></Label></div>
                    <div style={{ width:"330px" }}><TextField value={name || ""}  width="100%"  placeholder="이름을 입력하세요" onChange={(e) => setName(e.target.value)}/></div>
                </div>
            </div>
            <div className="SignUp_Modal_height"></div>
            <div className="MSignUp_Modal_context">
                <div style={{ display:"flex" }}>
                    <div style={{ width:"170px" }}><Label type="signUp" text="핸드폰번호" required={true}></Label></div>
                    <div style={{ width:"330px" }}><TextField value={phone || ""} width="100%"  placeholder="핸드폰번호를 입력하세요(010-1234-5678)" onChange={(e) => setPhone(e.target.value)}/></div>
                </div>
            </div>
            <div className="SignUp_Modal_height"></div>
            <div className="MSignUp_Modal_context">
                <div style={{ display:"flex" }}>
                    <div style={{ width:"170px" }}><Label type="signUp" text="이메일" required={true}></Label></div>
                    <div style={{ width:"330px" }}><TextField value={email || ""}  width="100%"  placeholder="이메일을 입력하세요" onChange={(e) => setEmail(e.target.value)}/></div>
                </div>
            </div>
            <div className="SignUp_Modal_height"></div>
            <div className="SignUp_Modal_bottom">
                <Button size="lg" text="가입" textColor="black" color="" cType="default" onClick={handleSignUp}></Button>
                <Button size="lg" text="취소" textColor="black" color="" cType="default" onClick={() => dispatch(SignUpModal(false))}></Button>
            </div>
            {MeModel &&
                <div className='Massage_Modal_Container'>
                <div className='Massage_Modal'>
                    <MassageModal type="SignUp" title="회원가입" massage={massage}/>
                </div> 
                </div> 
            }
        </div>
    )
}
export default SignModal;