import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
     /*//let counter = 10;                   //if we this variable for count then the changes are
                                          //not propogate on UI hence we use hooks and useState() 
                                          //hook used here 
      */
     let [counter,setCounter] = useState(10);

     let increament = ()=>{
      if(counter>19){
        alert('You can not do increament after 20! ');
        document.getElementById.setAttribute("onClick","");
    }
      counter = counter+1;
      setCounter(counter);
     }

     let decreament = ()=>{
      if(counter<1){
        alert("You can not do decreament after 0! ");
        document.getElementById.setAttribute("onClick" ,"");
      }
      counter=counter-1;
      setCounter(counter);
     }

  return (
    <>
      
        
      
      <h1>Counter: {counter}</h1>

      <button onClick={increament}>Increment</button>
      <button onClick={decreament}>Decrement</button>
      

    </>
  )
}

export default App
