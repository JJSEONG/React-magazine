import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faHeart, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import Logo from '../logo.png'

const Post = () => {
  return (
    <PostWrap>
      <Header>
        <User>
          <ImgWrap>
            <img src={ Logo } alt="" />
          </ImgWrap>
          <div>이름</div>
        </User>
        <IconBox>
          <div>2022-07-15 09:20:07</div>
          <div style={{margin: "0 20px"}}>
            <button>
              <FontAwesomeIcon icon={ faPenToSquare } />
            </button>
            <button>
              <FontAwesomeIcon icon={ faXmark } />
            </button>
          </div>
        </IconBox>
      </Header>
      <Desc>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODkDnFxgef41DJWIx-I4aJuAuMMweHw1Ng&usqp=CAU" alt="" />
        <p>누구보다 빠르게 남들과는 다르게 색다르게 리듬을 타는 비트위의 나그네</p>
      </Desc>
      <Like>
        <LikeInfo>
          <div>좋아요 1개</div>
          <div>댓글 1개</div>
        </LikeInfo>
        <LikeBtn>
          <FontAwesomeIcon icon={ faHeart } />
        </LikeBtn>
      </Like>
    </PostWrap>
  )
}

const PostWrap = styled.div`
  width: 70%;
  margin: 20px auto ;
  border: 4px solid #B6B6FA;
  border-radius: 10px;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
`

const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #EFEDFF;
  border-bottom: 4px solid #B6B6FA;
  box-sizing: border-box;
`

const User = styled.div`
  width: 14%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
`

const ImgWrap = styled.div`
  width: 40px;
  height: 40px;
  background-color: #EFEDFF;
  border: 2px solid #B6B6FA;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 6px;
  box-sizing: border-box;
  img {
    width: 100%;
    height: 100%;
  }
`

const IconBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  button {
    width: 30px;
    height: 30px;
    background-color: #B6B6FA;
    border: none;
    border-radius: 6px;
    box-sizing: border-box;
    color: white;
    outline: none;
    cursor: pointer;
    margin: 0 3px;
  }
`

const Desc = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    flex-basis: 50%;
  }
  p {
    width: 60%;
    height: 100%;
    padding: 30px;
    box-sizing: border-box;
  }
`

const Like = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 4px solid #B6B6FA;
  box-sizing: border-box;
`

const LikeInfo = styled.div`
  display: flex;
  margin-left: 30px;
  div {
    margin: 0 10px;
  }
`

const LikeBtn = styled.div`
  display: flex;
  font-size: 20px;
  color: #888;
  margin-right: 40px;
  cursor: pointer;
  &:hover {
    color: hotpink;
    filter: drop-shadow(0 0 6px pink);
  }
`

export default Post