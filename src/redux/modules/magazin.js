// magazin.js
import { db } from "../../shared/firebase"
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

// Actions
const LOAD = "magazin/LOAD";
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
    },
    {
      user_id: "abc@sbs.com",
      nickname: "파이리",
      user_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODkDnFxgef41DJWIx-I4aJuAuMMweHw1Ng&usqp=CAU",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODkDnFxgef41DJWIx-I4aJuAuMMweHw1Ng&usqp=CAU",
      write: "누구보다 빠르게 화염방사",
      date: "2022-07-22",
      layout: "right",
    },
    {
      user_id: "abc@sbs.com",
      nickname: "피카츄",
      user_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODkDnFxgef41DJWIx-I4aJuAuMMweHw1Ng&usqp=CAU",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpODkDnFxgef41DJWIx-I4aJuAuMMweHw1Ng&usqp=CAU",
      write: "누구보다 빠르게 전광석화",
      date: "2022-07-24",
      layout: "center",
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
  return { type: LOAD, post }
}

export function createPost(post) {
  console.log("액션 생성", post)
  return { type: CREATE, post }
}

export function createUser(user) {
  return { type: CREATE_USER, user }
}


// // middlewares
// export const loadVokaFB = () => {
//   return async function (dispatch) {
//     const post_data = await getDocs(collection(db, "post"));

//     let post_list = [];

//     post_data.forEach((post) => {
//       post_list.push({id:post.id, ...post.data()});
//     });

//     dispatch(loadPost(post_list));
//   }
// }


// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "magazin/CREATE": {
      console.log("스테이트", state, "액션", action.post)
      const new_post = [ action.post, ...state.post ]
      console.log("추가", new_post)
      return {...state, post:new_post}
    }
    case "magazin/CREATE_USER": {
      const new_state = { ...state, user: action.user }
      console.log('스테이트', new_state, '액션', action)
      // const new_user = {...state.user, user_id: action.user, user_img : action. }
      return new_state
    }
    default: return state;
  }
}