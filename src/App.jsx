import { useState } from 'react'
import './App.css'
import InputFields from './components/InputFields'
import DisplayDate from './components/DisplayDate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mainContainer'>
        <InputFields />
        <DisplayDate />
      </div>
    </>
  )
}

export default App
