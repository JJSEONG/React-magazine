import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus, faLock, faLockOpen, } from '@fortawesome/free-solid-svg-icons'
import { auth } from "../shared/firebase";
import { signOut } from "firebase/auth";


const Header = ({ isLogin }) => {
  // console.log(isLogin)
  const navigate = useNavigate();
  return (
    <Navbar>
      <NavWrap>
        <Logo onClick = {() => {
          navigate("/")
        }}>JS Book</Logo>
        <div style={{ marginRight : "10px"}}>
          {
            isLogin ? 
            (
              <Btn onClick = {() => { alert("Mypage 미구현")}}>
                <FontAwesomeIcon icon={ faUser } />
                <span>MyPage</span>
              </Btn>
            ) :
            (
              <Btn onClick = {() => { navigate("/signup")}}>
                <FontAwesomeIcon icon={ faUserPlus } />
                <span>회원가입</span>
              </Btn>
            )
          }
          {
            isLogin ?
            (
              <Btn onClick = {() => {
                signOut(auth);
                navigate("/")
              }}>
                <FontAwesomeIcon icon={ faLockOpen } />
                <span>로그아웃</span>
              </Btn>
            ) :
            (
              <Btn onClick = {() => { navigate("/login")}}>
                <FontAwesomeIcon icon={ faLock } />
                <span>로그인</span>
              </Btn>
            )
          }
        </div>
      </NavWrap>
    </Navbar>
  )
}

const Navbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EFEDFF;
  border-bottom: 2px solid #B6B6FA;
  z-index: 5000;
`

const NavWrap = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.h1`
  color: white;
  text-shadow: 
    0 0 3px #B6B6FA,
    3px 0px 3px #AD85CD;
  font-family: 'Russo One', sans-serif;
  margin: 0 20px;
  cursor: pointer;
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
  transition: 0.5s;
  span {
    margin-left: 6px;
  }
  &:hover {
    box-shadow: 0 0 6px #AD85CD;
    color: #464555;
  }
`

export default Header