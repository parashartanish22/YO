import { useState } from 'react'
import './App.css'
import Faculty from './Pages/Faculty'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Faculty />
    </>
  )
}

export default App
