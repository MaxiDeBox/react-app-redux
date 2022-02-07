import React from 'react';
import {connect} from "react-redux";
import {add2} from "./redux/actions/actions";

class Counter extends React.Component {
  render() {
    return (
      <div style={{
        padding: "20px",
        border: "1px solid #ccc"
      }}>
        <h1>Counter {this.props.counter2}</h1>
        <hr />
        <div>
          <button onClick={() => this.props.onChange(1)}>Add</button>
          <button onClick={() => this.props.onChange(-1)}>Sub</button>
        </div>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    counter2: state.counter2.counter2
  };
}

function mapDispatchToProps(dispath) {
  return{
    onChange: (number) => dispath(add2(number)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
