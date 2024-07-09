import React, { Component } from "react";
// no state, relying on the props to display data and notify any changes
class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <h4>Counter #{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.props.handleIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <ul />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
