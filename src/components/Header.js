import React from 'react'
import styled from 'styled-components'
import useSound from 'use-sound'
import switchOn from '../sounds/switch-on.mp3'
import switchOff from '../sounds/switch-off.mp3'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 2em 0;
  text-align: left;
  width: 80%;
`

const Header = ({ darkmode, toggleDarkmode }) => {
  function darkmodeOn() {
    toggleDarkmode(true)
  }

  function darkmodeOff() {
    toggleDarkmode(false)
  }

  const [playOn] = useSound(switchOn, { volume: 0.5 })
  const [playOff] = useSound(switchOff, { volume: 0.5 })

  return (
    <header>
      <Container>
        <h2 style={{ fontSize: '2.4rem' }}>
          <span
            role='img'
            aria-label='tomato emoji'
            style={{ display: 'inline-block', marginRight: '0.25em' }}>
            🍅
          </span>{' '}
          pomo
        </h2>
        {darkmode ? (
          <i
            className='gg-sun'
            style={{ cursor: 'pointer' }}
            onClick={() => {
              darkmodeOff()
              playOff()
            }}></i>
        ) : (
          <i
            className='gg-moon'
            style={{ cursor: 'pointer' }}
            onClick={() => {
              darkmodeOn()
              playOn()
            }}></i>
        )}
      </Container>
    </header>
  )
}

export default Header
