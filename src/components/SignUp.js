import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db, storage } from "../shared/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { signOut } from "firebase/auth";

const SignUp = ( { isLogin }) => {
  const navigate = useNavigate();

  const id_ref = React.useRef(null);
  const name_ref = React.useRef(null);
  const pw_ref = React.useRef(null);
  const confirm_ref = React.useRef(null);
  const file_link_ref = React.useRef(null);

  React.useEffect(() => {
    if(isLogin) {
      window.alert("이미 로그인 되어 있습니다.")
      navigate("/")
    }
  }, [])

  const signupFB = async (e) => {

    e.preventDefault();

    // if(id_ref.current.value === "") {
    //   window.alert("값이 비었어!")  
    // }
    const user = await createUserWithEmailAndPassword(
      auth,
      id_ref.current.value,
      pw_ref.current.value,
    );

    console.log(user);

    const user_data = await addDoc(collection(db, "users"), {
      user_id: id_ref.current.value,
      name: name_ref.current.value,
      image_url: file_link_ref.current.url,
    });
    console.log(user_data.id);

    window.alert(`안녕하세요.${name_ref.current.value} 님!\n회원가입에 성공하였습니다.`)
    signOut(auth);
    navigate('/')
  }

  const uploadFB = async (e) => {
    console.log(e.target.files);
    const uploaded_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );

    console.log(uploaded_file);

    const file_url = await getDownloadURL(uploaded_file.ref);

    console.log(file_url)
    file_link_ref.current = { url: file_url };
  };

  return (
    <Wrap>
      <ConWrap>
        <Title>Sign-Up</Title>
        <form
        onSubmit = {signupFB}
        style={{width: "50%"}}>
          <Input>
            <label>
              <p>아이디</p>
              <input ref={id_ref} type="text" maxLength={ 30 } placeholder="이메일 형식 아이디를 입력해주세요." />
            </label>
          </Input>
          <Input>
            <label>
              <p>닉네임</p>
              <input ref={name_ref} type="text" maxLength={ 16 } placeholder="닉네임을 입력해주세요." /> 
            </label>
          </Input>
          <Input>
            <label>
              <p>비밀번호</p>
              <input ref={pw_ref} type="password" maxLength={ 20 } placeholder="비밀번호를 입력해주세요." />
            </label>
          </Input>
          <Input>
            <label>
              <p>비밀번호 확인</p>
              <input ref={confirm_ref} type="password" maxLength={ 20 } placeholder="비밀번호를 다시 입력해주세요." />
            </label>
          </Input>
          <Input>
            <label>
              <p>이미지 등록</p>
              <input type="file" onChange={uploadFB} />
            </label>
          </Input>
          <div>
            <Btn>가입하기</Btn>
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

export default SignUp