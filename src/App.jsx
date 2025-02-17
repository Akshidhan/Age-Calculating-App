import { useState } from 'react'
import './App.css'
import InputFields from './components/InputFields'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mainContainer'>
        <InputFields />
      </div>
    </>
  )
}

export default App
