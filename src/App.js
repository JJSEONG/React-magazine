import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { auth, db } from "./shared/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

import './App.css';
import './fonts/fonts.css'
import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Main from './components/Main';
import Form from './components/Form'
import { loadPostFB } from './redux/modules/magazin';
import { useDispatch } from 'react-redux';

function App() {

  const [is_login, setIsLogin] = React.useState(false);
  const dispatch = useDispatch();

  // console.log(auth.currentUser);

  const loginCheck = async (user) => {
    if(user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }
  React.useEffect(() => {
    onAuthStateChanged(auth, loginCheck)
    dispatch(loadPostFB())
  }, []); 

  return (
    <div className="App">
      <Header isLogin={ is_login }/>
      <Routes>
        <Route path="/" exact element = { <Main isLogin={ is_login }/> } />
        <Route path="/signup" element = { <SignUp isLogin={ is_login } /> } />
        <Route path="/login" element = { <Login isLogin={ is_login } /> } />
        <Route path="/form" element = { <Form /> } />
      </Routes>
    </div>
  )
}

export default App;