// magazin.js
import { db } from "../../shared/firebase"
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

// Actions
const LOAD = "magazin/LOAD";
const LOAD_USER = "magazin/LOAD_USER"
const CREATE = "magazin/CREATE";
const CREATE_USER = "magazin/CREATE_USER"

const initialState = {
  post : [
    {
      user_id: "abc@sbs.com",
      nickname: "종성",
      user_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODkDnFxgef41DJWIx-I4aJuAuMMweHw1Ng&usqp=CAU",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODkDnFxgef41DJWIx-I4aJuAuMMweHw1Ng&usqp=CAU",
      write: "누구보다 빠르게",
      date: "2022-07-20",
      layout: "left",
    }
  ],
  user : {
    user_id: "abc@sbs.com",
    user_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODkDnFxgef41DJWIx-I4aJuAuMMweHw1Ng&usqp=CAU",
    nickname: "종성"
  }
}

// Action Creators
export function loadPost(post) {
  // console.log("post",post)
  return { type: LOAD, post }
}

export function loadUser(user) {
  // console.log("유저액션", user)
  return { type: LOAD_USER, user }
}

export function createPost(post) {
  // console.log("액션 생성", post)
  return { type: CREATE, post }
}

export function createUser(user) {
  return { type: CREATE_USER, user }
}


// middlewares
export const loadPostFB = () => {
  return async function (dispatch) {
    const post_data = await getDocs(collection(db, "posts"));
    
    let post_list = [];

    post_data.forEach((post) => {
      // console.log(post.data())
      post.data();
      post_list.push({ id: post.id, ...post.data() })
    })
    
    // console.log("middlewaere",post_list)

    dispatch(loadPost(post_list))
  }
}

export const loadUserFB = (id) => {
  return async function(dispatch) {
    // console.log(id)
    const user_data = await getDocs(collection(db, "users"));

    let user_d = [];

    user_data.forEach((user) => {
      user_d.push(user.data())
    })
    user_d = user_d.filter((v, i) => id === v.user_id)
    
    dispatch(loadUser(user_d))
  }
}

export const createPostFB = (post) => {
  // console.log("포스트",post)
  return async function (dispatch) {
    await addDoc(collection(db, "posts"), post);
    
    dispatch(createPost(post))
  }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "magazin/LOAD": {
      // console.log("리듀서",{ post: action.post, user: state.user })
      return { post: action.post, user: state.user }
    }

    case "magazin/LOAD_USER": {
      // console.log("액션:", action.user)
      // console.log("Reducer", { post: state.post, user: action.user[0] })
      return { post: state.post, user: action.user[0] }
    }

    case "magazin/CREATE": {
      // console.log("스테이트", state, "액션", action.post)
      const new_post = [ action.post, ...state.post ]
      // console.log("추가", new_post)
      return {...state, post:new_post}
    }
    
    case "magazin/CREATE_USER": {
      const new_state = { ...state, user: action.user }
      // console.log('스테이트', new_state, '액션', action)
      // const new_user = {...state.user, user_id: action.user, user_img : action. }
      return new_state
    }
    default: return state;
  }
}