import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
    </>
  )
}

export default App
