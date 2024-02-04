import { useState } from 'react'; // this is used to import hooks in react
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)

//  let counter=15;

const addValue=()=>{
// counter=counter+1;
// setCounter(counter)

setCounter(prevCounter=>prevCounter+1)
setCounter(prevCounter=>prevCounter+1)
setCounter(prevCounter=>prevCounter+1)

// setCounter(counter)
// setCounter(counter)
// setCounter(counter)      if yo try to run all this function once it will be executed in batch and update the value once and same bt if you use callback function then you can update value using previous values

// if(counter>20){   // value should not increse after 20
//   counter=20;
//   setCounter(counter)

// }
console.log("clicked",counter);
}
const remove=()=>{
  counter=counter-1;
  setCounter(counter)
  if(counter<0){    // counter should not go in negative
    counter=0;
    setCounter(counter)
  }
  console.log("value decrease",counter);
}
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value {counter} </h2>
      <button onClick={addValue}>Add Values</button><br /><br />
      <button onClick={remove}>Remove Value</button>
    </>
  )
}

export default App
