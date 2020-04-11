import React from 'react'
import styled from 'styled-components'

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

  return (
    <header>
      <Container>
        <h2>
          <span
            role='img'
            aria-label='tomato emoji'
            style={{ display: 'inline-block', marginRight: '0.25em' }}>
            🍅
          </span>{' '}
          pomo
        </h2>
        {darkmode ? (
          <i className='gg-sun' style={{ cursor: 'pointer' }} onClick={darkmodeOff}></i>
        ) : (
          <i className='gg-moon' style={{ cursor: 'pointer' }} onClick={darkmodeOn}></i>
        )}
      </Container>
    </header>
  )
}

export default Header
