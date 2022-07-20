import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Main = ({ isLogin }) => {

  const navigate = useNavigate();
  return (
    <PostWrap>
      <Post />
      <Post />
      <Post />
      { isLogin ?
        (<AddBtn onClick={() => {
          navigate("/form")
        }}>
          <FontAwesomeIcon style={{color: "white", fontSize: "24spx"}} icon={ faPencil } />
        </AddBtn>) : null }
    </PostWrap>
  )
}

const PostWrap = styled.div`
  margin-top: 80px;
`

const AddBtn = styled.div`
  position: fixed;
  bottom: 60px;
  right: 60px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #B6B6FA;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export default Main