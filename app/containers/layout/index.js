import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Router, Route, Link } from 'react-router'

import Button from 'react-uikit-button'
import Grid from 'react-uikit-grid'
import Block from 'react-uikit-block'
import Panel from 'react-uikit-panel'

import Header from '../../components/Header'

class App extends Component {
  render() {
    const { children } = this.props

    return (
      <div className="app">
        <Header />
        { children }
      </div>
    );
  }
}

export default App
