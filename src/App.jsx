import React, { useState } from 'react';
import './App.css';

function App() {

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const [nb1, setNb1] = useState(getRandomInt(11));
  const [nb2, setNb2] = useState(getRandomInt(11));
  const [userEntry, setUserEntry] = useState('');
  const [allResults, setAllResults] = useState([]);

  const setResult = () => {
    console.log("trop long")
  }

  const timeLimitForResult = setTimeout(setResult, 10000);

  const handleChange = (event) => {
    setUserEntry(parseInt(event.target.value))
  }
  
  if(userEntry === nb1*nb2){
    console.log("gagné")
    setUserEntry('')
    clearTimeout(timeLimitForResult); 
    setAllResults(`${nb1}  x ${nb2} = ${userEntry}`);
    setNb1(getRandomInt(11))
    setNb2(getRandomInt(11))
  } else {
    console.log("retry")
  }
  

  return (
    <div className="app">
        <div className="content">
          <p className="previous">{allResults}</p>
          <p className="numbers">
            <span className="nb1"> {nb1} </span> x <span className="nb2"> {nb2} </span>
          </p>
          <input onChange={handleChange} type="number" value={userEntry}/>
        </div>
    </div>
  );
}

export default App;
