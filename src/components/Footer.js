import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  font-size: 1.4rem;
  padding-bottom: 3rem;
`

export default () => (
  <Footer>
    from{' '}
    <a
      href='https://github.com/wh1zk1d'
      title='Visit me on GitHub'
      target='_blank'
      rel='noopener noreferrer'>
      wh1zk1d
    </a>{' '}
    with love
  </Footer>
)
