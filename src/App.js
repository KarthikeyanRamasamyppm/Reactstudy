import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App()
{

  const [formdata,setformdata]=useState(
    {
      name:''
    }
  )
  const handlechange=(e)=>{
    const {name,value}=e.target
    setformdata((x)=>(
      {
         ...x,
         [name]:value
      }
    ))
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    console.log(formdata)
    setformdata(
      {
        name:''
      }
    )

  }
  return(
  <div>
    <h1>Welcomt To react js</h1>

  <form onSubmit={handlesubmit}>
  <label htmlFor="name">Name:</label>
    <input type='text' name='name' onChange={handlechange} placeholder='name' />
    <button type='submit'>Submit</button>
    
  </form>
  </div>
  )
}


export default App;
