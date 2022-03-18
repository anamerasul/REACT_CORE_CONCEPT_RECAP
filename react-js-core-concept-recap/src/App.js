// import logo from './logo.svg';
import './App.css';
// import React, { Component } from "react"; 
import {useState} from 'react';
function App() {
  return (
    <div className="App">
    {/* <Welcome></Welcome>   */}
    <District name='noakhail' bivag='chitta'></District>
    <District name='bogra' bivag='raj'></District>
    <District name='dinaj' bivag='rang'></District>
    </div>
  );
}

const districtStyle={
  backgroundColor:'gray',
  margin:'20px',
  padding:'20px',
  borderRadius:'20px'
}

function District(props){
const[power,setPower]=useState(1)
const doublePower=()=>setPower(power*2)
  return(
    <div
    style={districtStyle}
    className='district'>
      <h2>Name:{props.name}</h2>
     
      <p>Spcialtiy:{props.bivag}</p>
      <h4>Power:{power}</h4>
      <button onClick={doublePower}>Boast power</button>
    </div>
  )
}



// class Welcome extends Component {
//   render() {
//     return (
//      <div>
//       <h1>Hello</h1>
//      </div>
//     );
//   }
// }

// export default Welcome;



export default App;





