import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuestionList from './components/QuestionList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={ {padding: '20px', fontFamily: 'Arial, sans-serif'} }>
        <h1>React Interview Questions</h1>
        <QuestionList />
         <p>Made while learning React 🚀</p>
      </div>
    </>
  )
}

export default App
