/**
 * Created by amit on 4/24/18.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { secondAction } from '../actions/example';


class ExampleComponentSecond extends Component {

    constructor(props) {
        
      super(props);
      this.props.dispatch(secondAction());
   // store.dispatch(secondAction());
      this.state = {amit:"tests"};
    }

    static initialAction({url, store}) {

        store.dispatch(secondAction());
    }
    componentDidUpdate(){
        
    }

    render() { 
       this.componentDidUpdate();
        console.log("render calling")
        const {data} = this.props.example_second;
        return (
            <div>
                <h1>Second Example Component</h1>
                <p>Some text amit {this.state.amit}</p>
                {data.id}
            </div>
        )
    }
}

function mapStateToProps(state) {
  return{  example_second: state.reducer1}
    //return state;
}

export default connect(mapStateToProps)(ExampleComponentSecond);
