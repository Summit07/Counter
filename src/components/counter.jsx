import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //than we can do Ajax call & get new data from server.
    }
  }

  componentWillUnmount() {
    console.log("App-Unmount");
  }
  //   state = {
  //     value: this.props.counter.value,
  //     // count: 0,
  //     tags: ["Good", "Cakes"],
  //     // imageUrl: "http:picsum.photos/200",
  //   };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = (element) => {
    console.log(element);
    // console.log("Clicked", this);
    // this.state.count++;
    this.setState({ value: this.state.value + 1 });
  };
  handleDecrement = (element) => {
    console.log(element);
    this.setState({ value: this.state.value - 1 });
  };

  //   doHandaleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  styles = {
    fontWeight: "bold",
    fontSize: 24,
  };
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no items.</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  render() {
    console.log("Counter-Rendered");
    // console.log("props", this.props);
    let classes = this.getColorClasses();

    return (
      <div>
        <h3>id: {this.props.counter.id}</h3>
        {this.props.children}
        {/* <img src={this.state.imageUrl} /> */}
        <button
          //   onClick={() => this.handleIncrement({ id: 1 })}
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={this.styles}
          className="btn btn-secondary btm-sm"
        >
          Increment(+)
        </button>
        <span
          style={(this.styles, { fontSize: 30 })}
          className={this.getColorClasses()}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          style={this.styles}
          className="btn btn-warning btm-sm m-2"
        >
          Decrement(-)
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          style={this.styles}
          className="btn btn-danger btm-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }
  getColorClasses() {
    let classes = " badge m-2 badge-";
    classes += this.props.counter.value <= 0 ? "danger" : "primary";
    // classes += this.state.count < 0 ? "danger" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
