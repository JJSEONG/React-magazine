import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faHeart, faPenToSquare } from '@fortawesome/free-solid-svg-icons'


const Post = ({ data, id }) => {
  
  // console.log("data when draw",data)
  // console.log("id값 확인", id)

  return (
    <PostWrap>
      <Header>
        <User>
          <ImgWrap>
            <img src={data.user_img} alt="" />
          </ImgWrap>
          <div style={{padding: "10px"}}>{data.nickname}</div>
        </User>
        <IconBox>
          <div>{data.date}</div>
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
      {
        (data.layout === "left") ?
          (
            <DescLeft>
              <img src={data.img} alt="" />
              <pre>{data.write}</pre>
            </DescLeft>
          )
          : (data.layout === "right") ?
          (
            <DescRight>
              <pre>{data.write}</pre>
              <img src={data.img} alt="" />
            </DescRight>
          )
          :
          (
            <DescCenter>
              <pre>{data.write}</pre>
              <img src={data.img} alt="" />
            </DescCenter>
          )
      }

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
  width: 60%;
  margin: 120px auto;
  border: 2px solid #B6B6FA;
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
  border-bottom: 2px solid #B6B6FA;
  box-sizing: border-box;
`

const User = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
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
  box-sizing: border-box;
  img {
    width: 100%;
    height: 100%;
    flex-basis: 100%;
    object-fit: cover;
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

const DescRight = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px #B6B6FA;
  overflow: hidden;
  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
    border-left: 2px solid #B6B6FA;
  }
  pre {
    width: 50%; 
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    white-space: pre-wrap;
    word-break: break-all;
  }
`

const DescLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px #B6B6FA;
  overflow: hidden;
  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
    border-right: 2px solid #B6B6FA;
  }
  pre {
    width: 50%; 
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    white-space: pre-wrap;
    word-break: break-all;
  }
`

const DescCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px #B6B6FA;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top: 2px solid #B6B6FA;
  }
  pre {
    width: 100%; 
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    white-space: pre-wrap;
    word-break: break-all;
  }
`

const Like = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #B6B6FA;
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
  transition: 0.5s;
  &:hover {
    color: hotpink;
    filter: drop-shadow(0 0 6px pink);
  }
`

export default Post