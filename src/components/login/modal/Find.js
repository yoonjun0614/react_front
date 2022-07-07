import React , { useState } from "react";
import Label from "../../../style/common/Label";
import TextField from "../../../style/common/TextField";
import Button from "../../../style/common/Button";
import { FindMessageModal , FindModel , FindPasswordMessageModal } from "../../../slice/modal/ModalSlice";
import { useDispatch , useSelector } from "react-redux";
import MassageModal from "../modal/Massage";
import { getFindId , getFindPassword } from '../../../api/login/login';
import "./Find.css";

const FindModal = () => {
        
    const dispatch = useDispatch();// eslint-disable-line no-unused-vars
    const [email, setEmail] = useState("");
    const [loginId, setLoginId] = useState("");
    const [massage, setMassage]  =useState("");
    const [phone, setPhone]  =useState("");
    const [findFlag , setFindFlag] = useState(false);
    const FModel = useSelector((state) => state.modal.value.FindMessageModal);
    const FPModel = useSelector((state) => state.modal.value.FindPasswordMessageModal);

    const onSetEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleIdFind = (e) => {
        if(email===""|| email===undefined){
            setMassage("이메일을 입력하세요");
            dispatch(FindMessageModal(true));
            return;
        }
        const emailRegex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
        if(!emailRegex.test(email)) {
            setMassage("이메일 양식이 아닙니다");
            dispatch(FindMessageModal(true));
            return;
        }
        const data = {params : { "email": email } };
        getFindId(data)
        .then((response) => {
            if(response.data.message==="가입된 아이디가 없습니다"){
                setMassage(response.data.message);
                dispatch(FindMessageModal(true));
            }else{
                setMassage("회원님의 아이디는 "+response.data.message+" 입니다");
                dispatch(FindMessageModal(true));
            }
        })
    };

    const handlePasswordFind = (e) => {
        if(loginId===""|| loginId===undefined){
            setMassage("아이디를 입력하세요");
            dispatch(FindMessageModal(true));
            return;
        }else if(phone==="" || phone===undefined){
            setMassage("핸드폰 번호를 입력하세요");
            dispatch(FindMessageModal(true));
            return;
        }
        const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/;
        if(!phoneRegex.test(phone)) {
            setMassage("핸드폰번호 양식이아닙니다");
            dispatch(FindMessageModal(true));
            return;
        }
        setMassage("정보 확인중");
        dispatch(FindPasswordMessageModal(true));
        const data = {params : { "loginId": loginId , "phone":phone } };
        getFindPassword(data)
        .then((response) => {
            dispatch(FindPasswordMessageModal(false));
            if(response.data.message==="회원정보"){
                setMassage("회원님의 이메일로 임시 비밀번호가 전송되었습니다.");
                dispatch(FindMessageModal(true));
                setFindFlag(findFlag);
            }else{
                setMassage(response.data.message);
                dispatch(FindMessageModal(true));
                setFindFlag(findFlag);
            }
        })

    };
    
    const onSetTitle = (e) => {
        if (e.target.value.length > 15) {
            setMassage("아이디는 15자를 초과할수 없습니다");
            dispatch(FindMessageModal(true));
            return;
        } else {
            setLoginId(e.target.value);
        }
    };

    return (
        <div className="Find_Modal_dal">
            <h3 className="Find_Modal_title">
                회원 정보 찾기
            </h3>
            <div className="Find_Modal_context">
                <div style={{ display:"flex" }}>
                    <div style={{ width:"170px" }}><Label type="Find" text="이메일" required={true}></Label></div>
                    <div style={{ width:"330px" }}><TextField value={email || ""}  width="100%"  placeholder="이메일을 입력하세요" onChange={onSetEmail}/></div>
                </div>
                <div style={{ width:"150px" , margin:'auto'}}><Button size="lg" text="아이디찾기" textColor="black" color="" cType="default" onClick={handleIdFind}></Button></div>
                <div style={{ display:"flex" }}>
                    <div style={{ width:"170px" }}><Label type="Find" text="아이디" required={true}></Label></div>
                    <div style={{ width:"330px" }}><TextField value={loginId || ""}  width="100%"  placeholder="아이디를 입력하세요" onChange={onSetTitle}/></div>
                </div>
                <div style={{ display:"flex" }}>
                    <div style={{ width:"170px" }}><Label type="Find" text="핸드폰번호" required={true}></Label></div>
                    <div style={{ width:"330px" }}><TextField value={phone || ""}  width="100%"  placeholder="핸드폰번호를 입력하세요" onChange={(e) => setPhone(e.target.value)}/></div>
                </div>
                <div style={{ width:"150px" , margin:'auto'}}><Button size="lg" text="비밀번호 찾기" textColor="black" color="" cType="default" onClick={handlePasswordFind}></Button></div>
            </div>
            <div className="Find_Modal_bottom">
                <Button size="lg" text="닫기" textColor="black" color="" cType="default" onClick={() => dispatch(FindModel(false))}></Button>
            </div>
            {FModel &&
                <div className='Find_Modal_Container'>
                    <div className='Find_Modal'>
                        <MassageModal type="Find" title="아이디찾기" massage={massage}/>
                    </div> 
                </div> 
            }
            {FPModel &&
                <div className='Find_Modal_Container'>
                    <div className='Find_Modal'>
                        <MassageModal type="FindPassword" title="아이디찾기" massage={massage}/>
                    </div> 
                </div> 
            }
        </div>
    )
}
export default FindModal;