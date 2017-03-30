console.log(">> Home Containers");

//Require define of redux
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

//import components and action
import Home from '../components/Home';
import * as HomeAction from '../actions/HomeAction';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    console.log("Current State: " + JSON.stringify(state) + ", Current Action: " + JSON.stringify(actions));

    return (
      <Home
        state={state}
        {...actions} 
        {...this.props}/>
    );
  }
}

//
export default connect(
  state => ({
    state: state.homereducer
  }), //[mapStateToProps]
  dispatch => ({actions: bindActionCreators(HomeAction, dispatch)}) //[mapDispatchToProps]
)(HomeContainer);

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// Connects a React component to a Redux store.
// It does not modify the component class passed to it.
// Instead, it returns a new, connected component class, for you to use.
// https://github.com/reactjs/react-redux/blob/master/docs/api.md