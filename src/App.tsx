// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import NavBar from './components/NavBar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="">

        <NavBar></NavBar>


      <div className='App'>
        <div className='mt-2'>
        <Hero></Hero>

        </div>
      </div>

    </div>

  )
}

export default App;
