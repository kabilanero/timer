
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [currenttime,setcurrenttime]=useState(new Date());
  useEffect(()=>{
    const timer=setInterval(()=>{
      setcurrenttime(new Date());
    },1000)
    return ()=> clearInterval(timer);
  },[]);
const formatnum=(num)=>{
  return num<10?`0${num}`:num;
}
  const formathour=(hour)=>{
    return hour===0?12:hour>12?hour-12:hour;
  }
const formatdate=(date)=>{
  const options={weekday:'long',year:'numeric',month:'long',day:'numeric'}
  return date.toLocaleDateString(undefined,options);
}

  return (
    <>
      <div className='container'>
      <h1 >Digital Clock</h1>
      <h2 className='time'>{formatnum(formathour(currenttime.getHours()))}:{currenttime.getMinutes()}:{formatnum(currenttime.getSeconds())} :{currenttime.getHours()>=12?"PM":"AM"}</h2>
      <h2 className='date'>{formatdate(currenttime)}</h2>
      </div>
     
    </>
  )
}

export default App
