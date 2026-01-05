import { useState } from 'react'
import './App.css'
import UserInfo from './components/UserInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <UserInfo />
    </div>
  )
}

export default App
