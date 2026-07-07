import { useState } from 'react'

function App() {
  const [colour, setcolour] = useState("black")

  return (
    <>
    <div className='w-full  h-screen duration-200' style={{background: colour}}>
      <div className='fixed flex flex-wrap justify-center bottom-9 inset-x-0
      px-2 '>
        <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=> setcolour("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>
           <button onClick={()=> setcolour("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>green</button>
            <button  onClick={()=> setcolour("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>blue</button>
            <button  onClick={()=> setcolour("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "yellow"}}>yellow</button>
            <button  onClick={()=> setcolour("gray")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "gray"}}>gray</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
