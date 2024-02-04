

import Chai from "./Chai";

//function name sholud be capital always


function App() {
 const username="tejal Mohod"

  return (
    // <h1>Chai aur react with vite  Tejal Mohod </h1>
    // here we can only return only one element so we can wrap code in one element and cal work like this
    <>
     <Chai/>
     
     <h1>code with react and chai  {username}</h1>
    
    </>
   
  )
}

export default App
