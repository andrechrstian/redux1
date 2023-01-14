import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Result from './component/Result';
import { counterReducer } from './redux/Reducer/counterReducer';
import { kurangAngka, tambahAngka } from './action/counterAction';
import { handleAuth, masuk } from './action/authAction';
import { authReducer } from './redux/Reducer/authReducer';
 


function App() {
  
  const {total} = useSelector ((rootReducer) => rootReducer.counter);
  const {isLogin} = useSelector ((rootReducer) => rootReducer.auth);
  
  const dispatch = useDispatch();

  const onAdd = () => {dispatch(tambahAngka(total))}
  const onMin = () => {dispatch(kurangAngka(total))}
  const onAuth = () => {dispatch(handleAuth(isLogin))}

 console.log (isLogin)
 
  return (
    <div className='page1'>
      <button onClick={onAdd}>+</button>
      <button onClick={onMin}>-</button>
      <h1>{total}</h1>

      <Result/>

      <p>{isLogin ? "Anda Sudah Login" : "Silahkan Login"}</p>
      <button onClick={onAuth}>{isLogin ? "Logout" : "Login"}</button>
     
      
    </div>
  );
}

export default App;
