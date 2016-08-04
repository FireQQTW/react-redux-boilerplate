import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './style.css'

class Header extends Component {
  render() {

    return (
      <header className={ style.warp }>
        <ul className={ style.left }>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </header>
    );
  }
}

export default Header
