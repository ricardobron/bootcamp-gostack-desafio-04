import React from 'react'
import './styles.css'

import { AccountCircle } from '@material-ui/icons'

function Header() {
  return (
    <header className="header-container">
      <div className="header-title">
        <h2><a href="https://facebook.com">facebook.</a></h2>
      </div>
      <div className="header-profile">
        <a href="https://www.facebook.com/ricardo10.silva">
          <p className="profile">Meu perfil</p>
          <AccountCircle />
        </a>
      </div>
    </header>
  )
}

export default Header