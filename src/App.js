import React, { useState } from 'react'
import './App.css';
import Table from './Table';
import {Users} from './user'
function App() {

const [query ,setQuery] = useState('')



const search = (data) => {
  return( 
    data.filter((item) => 
    item.first_name.toLowerCase().includes(query) ||
    item.last_name.toLowerCase().includes(query)  ||
    item.email.toLowerCase().includes(query) 
    )
    );

 }

  return (
    <div className="App">
     <input className='input' input='text' placeholder ='search' onChange={(e)=>setQuery(e.target.value)}></input>
     <Table 
     data={search(Users)} 
     />
  
    </div>
  );
}

export default App;
