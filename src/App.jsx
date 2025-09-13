import { useState } from 'react'
import reactLogo from './assets/react.svg'
import cloudLogo from '/cloud.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={cloudLogo} className="logo" alt="Fitness-App" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="Let's Go Boys" />
        </a>
      </div>
      <h1>Fitness-App + Let's Go Boys</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Project coming soon... By Archit, Sambhav and Faaiz.
      </p>
    </>
  )
}

export default App
