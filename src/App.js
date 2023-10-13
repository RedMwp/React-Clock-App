import React, { useState } from 'react';
import './style.css';

let App = () => {
  //time

  let d = new Date();
  let hour = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  let time = `${hour} : ${minutes} : ${seconds}`;

  let [currentTime, setCurrentTime] = useState(time);

  //updating the time

let timeUpdate = ()=>{

  let d = new Date();
  let hour = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();


let time = `${hour} : ${minutes} : ${seconds}`;

setCurrentTime(time);

}

setInterval(timeUpdate, 1000);

  return <div> 
  {currentTime}
  </div>;
};

export default App;
