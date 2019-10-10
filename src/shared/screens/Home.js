import React, { Component } from 'react';
import {connect} from 'react-redux';

import { homeAction } from '../actions/home';

class Home extends Component {
	static initialAction({url, store}) {
		store.dispatch(homeAction());
    }
	render() {
    	return (
    		<div className="home-page">
    			Home Page
    		</div>
    	);
    }
}

function mapStateToProps(state) {
    return {
        example: state.example,
    }
}

export default connect(mapStateToProps)(Home);