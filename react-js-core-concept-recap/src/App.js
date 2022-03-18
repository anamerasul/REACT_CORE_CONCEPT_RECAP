// import logo from './logo.svg';
import './App.css';
// import React, { Component } from "react"; 
import {useState,useEffect} from 'react';
function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
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

function LoadPosts(){

  const[posts,SetPosts]=useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res=>res.json())
    .then(data=>SetPosts(data))
  }, [])
  
return(
  <div>
    <h1>Post:{posts.length}</h1>

    <div style={{
      display:'grid',
      gridTemplateColumns:'repeat(4,1fr)'
    }}>
    {
      posts.map(post=><Post title={post.title}
      key={post.id}
      body={post.body}
      ></Post>)
    }

    </div>
  
  </div>
)
}


function Post(props){

  return(
    <div style={{
      backgroundColor:'gray',
      padding:'20px',
      margin:'10px',
      borderRadius:'20px'
    }}>
      <h2>Title:{props.title}</h2>
      <p>Body:{props.body}</p>
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





