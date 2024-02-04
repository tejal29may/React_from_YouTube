import { useState } from "react"
import './index.css'

function App() {
  const [color,setColor]=useState('pink')
  const [textColor,setText]=useState('blue')

  return (
    
      <div id="main_div" className="w-full h-screen duration-200"
      style={{backgroundColor:color,color:"black"}}>
        <h2 className="text-blue size-50 " style={{color:textColor}}>This is bg changer application</h2>
        <div className="fixed flex flex-wrap justify-center bottom-12 ">
        <div className="flex flex-wrap justify-center gap-5 px-3 py-3 rounded-full bg-white">
          <button className="outline-none px-4  rounded-full " onClick={()=>setColor("red",setText("white"))} style={{backgroundColor:"red"}}>Red</button>
          <button className="outline-none px-4  rounded-full" onClick={()=>setColor("Green",setText("blue"))} style={{backgroundColor:"Green"}}>Green</button>
          <button className="outline-none px-4  rounded-full" onClick={()=>setColor("blue",setText("white"))} style={{backgroundColor:"blue"}}>Blue</button>
          <button className="outline-none px-4  rounded-full" onClick={()=>setColor("yellow",setText("green"))} style={{backgroundColor:"Yellow"}}>Yelllow</button>
          <button className="outline-none px-4  rounded-full" onClick={()=>setColor("cyan",setText("orange"))} style={{backgroundColor:"cyan"}}>Cyan</button>
         

        </div>
        </div>

      </div>
 
  )
}

export default App
