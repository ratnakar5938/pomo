import React, { useState } from 'react'
import Header from './components/Header'
import Timer from './components/Timer'
import './App.css'

const App = () => {
  const [darkmode, setDarkmode] = useState(JSON.parse(localStorage.getItem('darkmode')))

  function toggleDarkmode(value) {
    setDarkmode(value)
    localStorage.setItem('darkmode', JSON.stringify(value))
  }

  return (
    <div className={`${darkmode ? 'theme-dark' : 'theme-light'} app`}>
      <Header darkmode={darkmode} toggleDarkmode={toggleDarkmode} />
      <Timer />
    </div>
  )
}

export default App
