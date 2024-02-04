import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function myApp(){
return(
<div>
  <h1>Hello there</h1>
</div>
)
}


// const ReactElement={
//   type:'a',
//   props:{
//       href:"https://google.com",
//       target:'_blank'
//   },
//   children:"click me to visit google"
// }

// const ReactElement=(
//   <a href="https://google.com" target='_blank'>visit google</a>
// )
 const username="mumbai  delhi"
const ReactElement=React.createElement(
  'a',
  { href:'https://google.com',target:'_blank'},
  'click to visit google',
  username
)
ReactDOM.createRoot(document.getElementById('root')).render(

    // <App />
    ReactElement

 
)
