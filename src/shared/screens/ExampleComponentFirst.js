/**
 * Created by amit on 4/24/18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {exampleAction} from '../actions/example';
import { Route, Link } from 'react-router-dom';

class ExampleComponentFirst extends Component {

    static initialAction({url, store}) {


        store.dispatch(exampleAction());
    }

    componentDidMount() {
        // this.props.dispatch(exampleAction());
    }

    moveToSecondPage = (e) => {
        e.preventDefault();
        this.props.history.push('/amit')
    };

    render() {
        console.log(this.props.example);
        const {data} = this.props.example;
        return (
            <div>
                <h1>First Example Component</h1>
                <p>Some text</p>

                <Link to='/amit'>Topics</Link>
                <a href="#" onClick={this.moveToSecondPage}>move to second page</a>
                {
                    <div>{data.title}</div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        example: state.example,
    }
}

export default connect(mapStateToProps)(ExampleComponentFirst);

