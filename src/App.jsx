import { useState } from 'react'
import Navigation from './components/navigation'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Mainbody from './components/mainbody'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Mainbody />
    </>

  )
}

export default App
