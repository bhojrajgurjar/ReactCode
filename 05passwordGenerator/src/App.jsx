import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const[length,setLength] = new useState(8);
  const[numberAllowed,setNumberAllowed] = useState(false);
  const[charAllowed,setCharAllowed] = useState(false);
  const[password,setPassword] = useState("");

  const passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password);
  },[password])

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "`~!@#$%^&*(){}?><[]\|/+-=_";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);

      setPassword(pass);
    }
  },[length,numberAllowed,charAllowed,setPassword])


  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])
 

  const generateByClick = ()=>{
    passwordGenerator();
  }

  return (
    <>
      <h1 className='text-4xl text-center text-white'>PassWord Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg
                      px-4 py-3 my-8 text-orange-500 bg-gray-800'>
          <div className='flex shadow rounded-lg 
                          overflow-hidden mb-4'>
               <input 
                  type="text"
                  value={password}
                  className='outline-none w-full py-1 px-3'
                  placeholder='Password'
                  ref={passwordRef}
              />
              
              <button className='outline-none bg-blue-800 text-white hover:bg-blue-600
                                  px-3 py-0.5 shrink-0 border-white border-r'
                                  onClick={generateByClick}
                                  >
                      Generate
              </button>
              <button className='outline-none bg-blue-800 text-white
                                  px-3 py-0.5 shrink-0 hover:bg-blue-600'
                                  onClick={copyPasswordToClipboard}
                                  >
                      Copy
              </button>
          </div>
          <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                   <input 
                       type="range"
                       min={6}
                       max={30}
                       value={length}
                       id='lengthInput'
                       className='cursor-pointer'
                       onChange={(e)=>{setLength(e.target.value)}}
                  />
                  <label htmlFor='lengthInput'>Length({length})</label>
              </div>
              <div className='flex items-center gap-x-1'>
                 <input 
                    type="checkbox"
                    defaultChecked={numberAllowed}
                    id='numberInput'
                    className='cursor-pointer'
                    onChange={()=>{
                      setNumberAllowed((prev)=>!prev)
                    }} 
                 />
                 <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className='flex items-center gap-x-1'>
                 <input 
                    type="checkbox"
                    defaultChecked={charAllowed}
                    id='charInput'
                    className='cursor-pointer'
                    onChange={()=>{
                      setCharAllowed((prev)=>!prev)
                    }} 
                 />
                 <label htmlFor="charInput">Special Character</label>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
