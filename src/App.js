import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Result from './component/Result';



function App() {
  const [num, setNum] = useState(0)

  //cara terima data dari redux aka storenya
  const {total} = useSelector ((state) => state);
  console.log(total);


  const  tambahAngka = () =>  {
    setNum(num+1)
  }

  const kurangAngka = () => {
    setNum(num-1)
  }
 
  return (
    <div className='page1'>
      <button onClick={tambahAngka}>+</button>
      <button onClick={kurangAngka}>-</button>
      <h1>{num}</h1>
      <h1>{total}</h1>
      <Result/>
  
    </div>
  );
}

export default App;
