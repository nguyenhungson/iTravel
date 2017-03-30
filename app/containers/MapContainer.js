console.log(">> Map Containers");

//Require define of redux
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

//import components and action
import Map from '../components/Map';
import * as MapAction from '../actions/MapAction';

class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    console.log("Current State: " + JSON.stringify(state) + ", Current Action: " + JSON.stringify(actions));

    return (
      <Map
        state={state}
        {...actions} 
        {...this.props}/>
    );
  }
}

//
export default connect(
  state => ({
    state: state.mapreducer
  }), //[mapStateToProps]
  dispatch => ({actions: bindActionCreators(MapAction, dispatch)}) //[mapDispatchToProps]
)(MapContainer);

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// Connects a React component to a Redux store.
// It does not modify the component class passed to it.
// Instead, it returns a new, connected component class, for you to use.
// https://github.com/reactjs/react-redux/blob/master/docs/api.md