import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Clock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16em;
  text-align: center;
`

const Timer = ({ min = 25 }) => {
  const [minutes, setMinutes] = useState(min)
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (running) {
      if (minutes === 0 && seconds === 0) {
        alert('finished!')
      } else {
        const timer = setInterval(() => {
          if (seconds === 0) {
            setMinutes(minutes - 1)
            setSeconds(59)
          } else {
            setSeconds(seconds - 1)
          }
        }, 1000)
        return () => clearInterval(timer)
      }
    }
  }, [minutes, running, seconds])

  function start() {
    setMinutes(minutes - 1)
    setSeconds(59)
    setRunning(true)
  }

  function reset() {
    setMinutes(min)
    setSeconds(0)
    setRunning(false)
  }

  return (
    <Clock>
      {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      {running ? <button onClick={reset}>Reset</button> : <button onClick={start}>Start</button>}
    </Clock>
  )
}

export default Timer
