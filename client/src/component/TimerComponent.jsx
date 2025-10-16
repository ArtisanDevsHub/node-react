import React, { useRef, useState } from "react";


function TimerComponent() {

const [seconds, setSeconds] = useState(0);
const [timerIdLog, setTimerIdLog] = useState([`initial timerId is undefined`]);

const timerId = useRef(0);

function timerStart(){
    timerId.current = setInterval(() => {
      setSeconds((prev)=> (prev * 1000 + 100)/1000)  
    }, 100);
    setTimerIdLog(prev => [...prev, `Starting timer id: ${timerId.current}`]);
}

function timerStop(){
    clearInterval(timerId.current);
    setTimerIdLog(prev => [...prev, `CLearing timer id: ${timerId.current}`]);
}

  return (
    <div style={{display: "inline-block"}}>
      <h3>Second(s):{seconds.toFixed(2)} </h3>
      <div>
        <button onClick={timerStart}>Start</button>
        <button onClick={timerStop}>Stop</button>
      </div>
      <ul style={{listStyle: "none", height: "200px", overflow: "auto", textAlign: "left"}}>
        {
            timerIdLog.map(item =>{
                return <li>{item}</li>
            })
        }
      </ul>
    </div>
  );
}

export default TimerComponent;
