import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//try with our custom reactElement     but it doesn't work because this is our manual way, react has its own to create element
// const reactElement = {
//     type:'a',
//     props:{
//         href:'https://chat.openai.com',
//         target:'_blank'
//     },
//     children:'Click me to visit my chatGpt account'
// }

//Another way of creating element
const AnotherElement = (
    <a href="https://chat.openai.com" target='_blank'>Visit Google</a>
);

const extraStuff="want to add in any html element"


//this is how react configure html element
const reactElement=React.createElement(
    'a',
    {href:'https://chat.openai.com',target:'_blank'},
    'Click to visit Google ',
    extraStuff
)

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <App />
   
) 
