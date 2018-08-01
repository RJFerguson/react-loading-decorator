import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { loadingManager } from "./index";

class App extends Component {
  state = {};

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(json =>
        setTimeout(() => {
          this.setState({ data: json, isLoading: false });
        }, 3000)
      );
  }

  @loadingManager({ size: "5", color: "red", duration: "1.1" })
  render() {
    const { data } = this.state;
    return (
      <Fragment>
        <div>
          User: {data.userId} post:{data.id}
        </div>
        <div>{data.title}</div>
        <div>{data.body}</div>
      </Fragment>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
