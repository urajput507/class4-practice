import React, {useState} from 'react';
import './App.css';


function Time() {

    let [isMorning, setMorning] = useState(false)
  
    return (
    <div className={`night ${isMorning ? 'morning' : ''}`}>
  
        
  <div className="center">
 <div className="f">
     <h2 >Good {isMorning ? 'Morning' : 'Night'}</h2>
        <h4>Usman Rajput</h4> </div>
        <button onClick={() => setMorning(!isMorning)} > Update Day </button>
    </div>
    </div>
  );
  }

  export default Time;

  