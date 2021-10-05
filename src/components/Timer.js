import React, { useState, useEffect } from 'react'
import useSound from 'use-sound'
import styled from 'styled-components'
import click from '../sounds/click.mp3'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Space Mono', monospace;
  text-align: center;
`

const Clock = styled.div`
  font-size: 16rem;

  @media screen and (max-width: 640px) {
    font-size: 8rem;
  }
`

const Button = styled.button`
  background: var(--accent);
  border: 0 none;
  border-radius: 4px;
  box-shadow: 0 2.4px 2.2px rgba(0, 0, 0, 0.02), 0 5.9px 5.3px rgba(0, 0, 0, 0.028),
    0 11px 10px rgba(0, 0, 0, 0.035), 0 19.7px 17.9px rgba(0, 0, 0, 0.042),
    0 36.8px 33.4px rgba(0, 0, 0, 0.05), 0 88px 80px rgba(0, 0, 0, 0.07);
  color: var(--darkmode-text);
  cursor: pointer;
  font-family: 'Space Mono', monospace;
  font-size: 1.6rem;
  letter-spacing: 1px;
  margin: 4rem 0;
  padding: 1.2rem 1.7rem;
  text-transform: uppercase;
`

const NotificationText = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 2rem;
`

const Timer = ({ min = 25 }) => {
  const format = (num) => (num < 10 ? `0${num}` : num)

  const [state, setState] = useState({
    minutes: min,
    seconds: 0,
    isRunning: false,
    isFinished: false,
    counter: 0,
  })




  useEffect(() => {
    if (state.isRunning) {
      if (state.minutes === 0 && state.seconds === 0) {
        setState({ ...state, isFinished: true, isRunning: false, counter: state.counter + 1 })
      } else {
        const timer = setInterval(() => {
          if (state.seconds === 0) {
            setState({ ...state, minutes: state.minutes - 1, seconds: 59 })
          } else {
            setState({ ...state, seconds: state.seconds - 1 })
          }
        }, 1000)
        return () => clearInterval(timer)
      }
    }
  }, [state, state.isRunning, state.minutes, state.seconds])

  useEffect(() => {
    if (state.isFinished) {
      document.title = 'Finished 🎉'
      if (Notification.permission === "granted") {
        new Notification("Pomodoro complete, time for a break!");
      }
    } else {
      document.title = `${format(state.minutes)}:${format(state.seconds)}`
    }
  }, [state.isFinished, state.minutes, state.seconds])

  useEffect(() => {
    requestPermission()
  }, [])

  function requestPermission() {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    else if (Notification.permission !== "denied") {
      Notification.requestPermission()
    }
  }

  const [playClick] = useSound(click, { volume: 0.5 })

  const start = () => {
    setState({
      ...state,
      minutes: state.minutes - 1,
      seconds: 59,
      isRunning: true,
      isFinished: false,
    })
  }

  const reset = () => {
    setState({ ...state, minutes: min, seconds: 0, isRunning: false })
  }

  const Finished = () => (
    <NotificationText>
      You did it! Now enjoy your {state.counter % 4 === 0 && state.counter !== 0 ? '30' : '5'}min
      break{' '}
      <span role='img' aria-label='coffee emoji'>
        ☕️
      </span>
    </NotificationText>
  )

  return (
    <Container>
      <Clock>
        {state.isFinished ? (
          <Finished>Finished</Finished>
        ) : (
          `${format(state.minutes)}:${format(state.seconds)}`
        )}
      </Clock>
      {state.isRunning ? (
        <Button
          onClick={() => {
            reset()
            playClick()
          }}>
          Reset
        </Button>
      ) : (
        <Button
          onClick={() => {
            start()
            playClick()
          }}>
          {state.isFinished ? 'Next round' : 'Start'}
        </Button>
      )}
      {state.counter > 0 && `Finished: ${state.counter}`}
    </Container>
  )
}

export default Timer
