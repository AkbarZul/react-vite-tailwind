import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="w-full h-screen text-4xl text-blue-600 flex items-center justify-center">
      Hello world, Try vite and tailwind
     </div>
    </>
  )
}

export default App
