import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faHeart, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const Form = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Title>게시글 작성</Title>
      <Filewrap>
        <FileInput type="text" placeholder="사진을 등록해주세요." readOnly />
        <FileBtn>
          <Label htmlFor="file">파일 찾기</Label>
        </FileBtn>
        <input type="file" id="file" style={{ display: "none"}} />
      </Filewrap>
      <LayoutWrap>
        <SubTitle>레이아웃 선택</SubTitle>
        <div>
          <Radio>
            <input type="radio" id="right" name="layout" />
            <label htmlFor="right">오른쪽 사진</label>
          </Radio>
          <LayoutRight>
            <p>누구보다 빠르게 남들과는 다르게 색다르게 리듬을 타는 비트위의 나그네</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODkDnFxgef41DJWIx-I4aJuAuMMweHw1Ng&usqp=CAU" alt="" />
          </LayoutRight>

          <Radio>
            <input type="radio" id="left" name="layout" />
            <label htmlFor="left">왼쪽 사진</label>
          </Radio>
          <LayoutLeft>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODkDnFxgef41DJWIx-I4aJuAuMMweHw1Ng&usqp=CAU" alt="" />
            <p>누구보다 빠르게 남들과는 다르게 색다르게 리듬을 타는 비트위의 나그네</p>
          </LayoutLeft>

          <Radio>
            <input type="radio" id="center" name="layout" />
            <label htmlFor="center">가운데 사진</label>
          </Radio>
          <LayoutCenter>
            <p>누구보다 빠르게 남들과는 다르게 색다르게 리듬을 타는 비트위의 나그네</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODkDnFxgef41DJWIx-I4aJuAuMMweHw1Ng&usqp=CAU" alt="" />
          </LayoutCenter>
        </div>
        <TextWrap>
          <h2>게시글 내용</h2>
          <textarea cols="30" rows="10" placeholder='게시글 작성하기'></textarea>
          <BtnWrap>
            <button onClick = {() => {
              window.alert("게시글을 작성하였습니다.")
              navigate("/")
            }}>게시글 작성</button>
            <button onClick = {() => {
              window.alert("취소를 클릭하셨습니다.")
              navigate("/")
            }}>뒤로가기</button>
          </BtnWrap>
        </TextWrap>
      </LayoutWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 70%;
  margin: 80px auto 20px;
  box-sizing: border-box;
`

const Title = styled.h2`
  color: white;
  text-shadow: 
    0 0 3px #B6B6FA,
    3px 0px 3px #AD85CD;
  margin: 0 20px;
`

const Filewrap = styled.div`
  width: 70%;
  height: 30px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FileInput = styled.input`
  flex-basis: 70%;
  width: 100%;
  height: 100%; 
  border: 1px solid #B6B6FA;
  border-radius: 6px;
  outline: none;
  text-align: left;
  padding: 4px 20px;
  box-sizing: border-box;
`

const FileBtn = styled.button`
  flex-basis: 10%;
  width: 100%;
  height: 100%;
  margin-left: 6px;
  padding: 0;
  border: none;
  border-radius: 6px; 
  background-color: #B6B6FA;
`

const Label = styled.label`
  width: 100%;
  height: 100%;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LayoutWrap = styled.div`
  width: 80%;
  height: 100%;
  box-shadow: 0 0 10px #B6B6FA;
  border-radius: 10px;
  margin: 0 auto;
  padding: 20px;
`

const Radio = styled.div`
  width: 14%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-left: 160px;
  input {
    display: none;
  }
  input + label {
    position: relative;
    width: 100px;
    text-align: left;
    transition: 0.2s;
  }
  input + label::before {
    content: '';
    position: absolute;
    top: calc(50% - 12px);
    bottom: 0;
    right: 0;
    left: -30%;
    width: 24px;
    height: 24px;
    background-color: lightgray;
    border-radius: 50%;
    transition: 1.2s;
  }
  input + label::after {
    content: '';
    position: absolute;
    top: calc(50% - 6px);
    bottom: 0;
    right: 0;
    left: -24%;
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 50%;
  }
  input:checked + label {
    color: white;
    text-shadow: 
      0 0 3px #B6B6FA,
      3px 0px 3px #AD85CD;
  }
  input:checked + label::before {
    background-color: #B6B6FA;
  }
`

const SubTitle = styled.h2`
  width: 24%;
  height: 100%;
  box-shadow: 0 0 6px #B6B6FA;
  border-radius: 10px;
  padding: 6px;
  margin: 0 auto 24px;
  text-shadow:
    0 0 3px #B6B6FA,
    3px 0px 3px #AD85CD;
  color: white;
`

const LayoutRight = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6px auto 30px;
  border: 2px solid #B6B6FA;
  border-radius: 8px;
  box-shadow: 0 0 10px #B6B6FA;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    flex-basis: 50%;
    border-left: 2px solid #B6B6FA;
  }
  p {
    width: 50%; 
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
`

const LayoutLeft = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6px auto 30px;
  border: 2px solid #B6B6FA;
  border-radius: 8px;
  box-shadow: 0 0 10px #B6B6FA;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    flex-basis: 50%;
    border-right: 2px solid #B6B6FA;
  }
  p {
    width: 50%; 
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
`

const LayoutCenter = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 6px auto 30px;
  border: 2px solid #B6B6FA;
  border-radius: 8px;
  box-shadow: 0 0 10px #B6B6FA;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    flex-basis: 50%;
    border-right: 2px solid #B6B6FA;
  }
  p {
    width: 100%; 
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
`

const TextWrap = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  h2 {
    width: 24%;
    height: 100%;
    box-shadow: 0 0 6px #B6B6FA;
    border-radius: 10px;
    padding: 6px;
    margin: 0 auto 24px;
    text-shadow:
      0 0 3px #B6B6FA,
      3px 0px 3px #AD85CD;
    color: white;
  }
  textarea {
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 6px #B6B6FA;
    outline: none;
  }
`

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 20%;
    height: 40px;
    background-color: #B6B6FA;
    margin: 22px 4px 0;
    outline: none;
    border: none;
    border-radius: 14px;
    color: white;
    cursor: pointer;
    transition: 0.3s;
  }
  button:hover {
    box-shadow: 0 0 3px #AD85CD;
  }
`

export default Form