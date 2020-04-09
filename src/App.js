import React from 'react'
import Header from './components/Header'
import Timer from './components/Timer'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Timer min={25} />
    </div>
  )
}

export default App
