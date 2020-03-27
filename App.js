import React, { Component } from 'react';
import { connect } from "react-redux";
class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>i am App component {this.props.myname}</h1>
                <h1>i am App component {this.props.mywish}</h1>
                <button onClick={() => { this.props.changename("suresh") }}>change it</button>
                <button onClick={() => { this.props.changewish(['sleep', 'code']) }}>change it</button>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        myname: state.name,
        mywish: state.wishes
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changename: (name) => {
            dispatch({ type: 'CHANGE_NAME', payload: name })
        },
        tickname: (name) => {
            dispatch({ type: 'TICK_NAME', payload: name })
        },
        changewish: (wishes) => {
            dispatch({ type: 'CHANGE_WISHES', payload: wishes })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);