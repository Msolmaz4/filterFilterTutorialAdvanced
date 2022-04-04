import React, { useState } from 'react'
import './App.css';
import {Users} from './user'
function App() {

const [query ,setQuery] = useState('')



console.log(query)

  return (
    <div className="App">
     <input className='input' input='text' placeholder ='search' onChange={(e)=>setQuery(e.target.value)}></input>
     <ul>

     
     {
       Users.filter((item)=>item.first_name.toLowerCase().includes(query)).map((item) =>(
         <li key={item.id}>{item.first_name}</li>
       ))
     }
</ul>
    </div>
  );
}

export default App;
