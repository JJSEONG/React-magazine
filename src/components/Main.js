import React from 'react'
import styled from 'styled-components'
import Post from './Post'

const Main = () => {
  return (
    <PostWrap>
      <Post />
      <Post />
      <Post />
    </PostWrap>
  )
}

const PostWrap = styled.div`
  margin-top: 80px;
`

export default Main