import './App.css';
import React from "react";
import {connect} from "react-redux";

class App extends React.Component {

  render() {
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onAddNumber(15)}>Добавить 15</button>
          <button onClick={() => this.props.onAddNumber( -17)}>Вычесть 17</button>
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

function mapDispatchToProps(dispath) {
  return{
    onAdd: () => dispath({type: 'ADD'}),
    onSub: () => dispath({type: 'SUB'}),
    onAddNumber: (number) => dispath({type: 'ADD_NUMBER', payload: number})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
