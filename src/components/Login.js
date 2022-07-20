import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { auth, db } from "../shared/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { getDocs, where, query, collection } from "firebase/firestore"

const Login = ({ isLogin }) => {
  
  const navigate = useNavigate();

  console.log(isLogin)

  React.useEffect(() => {
    if(isLogin) {
      window.alert("이미 로그인 되어 있습니다.")
      navigate("/")
    }
  }, [])

  const id_ref = React.useRef(null);
  const pw_ref = React.useRef(null);

  const loginFB = async (e) => {
    e.preventDefault();
    console.log(id_ref.current.value, pw_ref.current.value);
    const user = await signInWithEmailAndPassword(
      auth,
      id_ref.current.value,
      pw_ref.current.value
    );

    window.alert("로그인 완료!")
    navigate("/")

    console.log(user);

    const user_docs = await getDocs(
      query(collection(db, "users"), where("user_id", "==", user.user.email))
    );

      user_docs.forEach((u) => {
        console.log(u.data());
      })
  } 

  return (
    <Wrap>
      <ConWrap>
        <Title>Login</Title>
        <form style={{width: "50%"}}>
          <Input>
            <p>아이디</p>
            <input ref={id_ref} type="text" maxLength={ 30 } placeholder="이메일 형식 아이디를 입력해주세요." />
          </Input>
          <Input>
            <p>비밀번호</p>
            <input ref={pw_ref} type="password" maxLength={ 20 } placeholder="비밀번호를 입력해주세요." />
          </Input>
          <div>
            <Btn onClick = {loginFB}>로그인하기</Btn>
            <Btn onClick = {() => {
              alert("회원가입에 실패하셨습니다.")
              navigate("/")
            }}>취소</Btn>
          </div>
        </form>
      </ConWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`
const ConWrap = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #EFEDFF;
  border: 2px solid #B6B6FA;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 10px #B6B6FA;
  &:hover {
    box-shadow: 0 0 10px #7F81C1;
  }
`

const Title = styled.h2`
  font-family: 'Russo One', sans-serif;
  font-size: 28px;
  margin-bottom: 30px;
  color: white;
  text-shadow: 
    0 0 3px #B6B6FA,
    3px 0px 3px #AD85CD;
`

const Input = styled.div`
  width: 100%;
  margin: 30px auto;
  p {
    text-align: left;
    margin-left: 14px;
    margin-bottom: 6px;
    font-family: GmarketB;
    color: white;
    text-shadow: 
      0 0 2px #B6B6FA,
      2px 0px 5px #AD85CD;
  }
  input {
    width: 95%;
    height: 24px;
    border: none;
    outline: none;
    background-color: #EFEDFF;
    border-bottom: 2px solid #B6B6FA;
    font-family: GmarketL;
    color: #6e6e6e;
  }
`

const Btn = styled.button`
  width: 100px;
  height: 40px;
  margin: 0 4px;
  background-color: #B6B6FA;
  color: white;
  font-family: GmarketM;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 6px #AD85CD;
    color: #464555;
  }
  `

export default Login