import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import HomePage from './assets/pages/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HomePage/>

    </>
  )
}



export default App
