import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from 'react-uikit-button'
import Grid from 'react-uikit-grid'
import Block from 'react-uikit-block'
import Panel from 'react-uikit-panel'

import * as fakeActions from '../../../actions/fakes';

class About extends Component {
  constructor(props) {
    super(props);

  }
  render () {
    const { fakes, fakeActions, children } = this.props
    return (
      <div>
      <h1>About</h1>
      about pages
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    fakes: state.fakes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fakeActions: bindActionCreators(fakeActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
