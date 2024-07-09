import React, { Component } from "react";
import Counter from "./counter";
// each counter maps to it's own counter component

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props; // object destructuring
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset Counters
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            handleIncrement={onIncrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
