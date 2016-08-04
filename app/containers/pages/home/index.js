import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from 'react-uikit-button'
import Grid from 'react-uikit-grid'
import Block from 'react-uikit-block'
import Panel from 'react-uikit-panel'

import * as fakeActions from '../../../actions/fakes';

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.fakeActions.getFake();

  }
  render () {
    const { fakes, fakeActions, children } = this.props

    return (
      <div>
        <h1>Default</h1>
        <Grid widths='1-4'>
          <div col='1-3' box>left block</div>
          <div col='2-3' box>main content</div>
        </Grid>
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
)(Home)
