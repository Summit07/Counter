import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters-Rendered");
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props; //object Destucturing rm this.props from below
    return (
      <div>
        <h1>Hello Metro Mart </h1>
        <button onClick={onReset} className={"btn btn-primary btn-big m-2"}>
          All Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
            // value={counter.value}
            // id={counter.id}
          >
            <h3>Title</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
