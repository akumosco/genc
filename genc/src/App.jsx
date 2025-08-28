import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div className="card">
        <h2>Login</h2>
        <form>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
        <div className="links">
          <a href="#">Forgot Password?</a> | <a href="#">Sign Up</a>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
