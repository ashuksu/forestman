import { useState } from 'react'
import reactLogo from './assets/react.svg'
import tailwindCssLogo from './assets/tailwindcss.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div className="flex items-center justify-center gap-4>">
              <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo vite" alt="Vite logo"/>
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
              <a href="https://tailwindcss.com/" target="_blank">
                  <img src={tailwindCssLogo} className="logo tailwindcss" alt="Tailwind CSS logo"/>
              </a>
          </div>
          <h1 className="text-3xl font-bold">React + TypeScript + Vite + Tailwind CSS</h1>
          <div className="card flex flex-col items-center justify-center space-y-6">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
              <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
              </p>
          </div>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>
      </>
  )
}

export default App
