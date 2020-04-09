import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  padding: 2em 0;
  width: 80%;
`

const Header = () => (
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
    </Container>
  </header>
)

export default Header
