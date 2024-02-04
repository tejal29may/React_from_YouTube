import { useState } from 'react'
import './input.css';
import './App.css';
import Cards from './cards';

function App() {
 let myObj={
  name:"tejal",
  age:22
 }

  return (
    // <> // its called fragments</>
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tejal Mohod</h1>
     <Cards username="tejal Mohod" btntext="click me"/>
     <Cards username="prajwal Mohod" btntext="visite here"/>
     

    </>
  )
}

export default App
