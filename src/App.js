import './App.css';
import React from "react";
import {connect} from "react-redux";

class App extends React.Component {

  updateCounter(value) {
    // this.setState({
    //   counter: this.state.counter + value
    // });
  }

  render() {
    console.log('app', this.props);
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={() => this.updateCounter(1)}>Добавить 1</button>
          <button onClick={() => this.updateCounter(-1)}>Вычесть 1</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps)(App);
