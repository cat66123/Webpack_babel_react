import React from "react";
import ReactDOM from "react-dom";
class IndexComponent extends React.Component {
  render() {
    return <h1>hello world!!!</h1>;
  }
}
var oBox = document.getElementById("box");
ReactDOM.render(<IndexComponent />, oBox);
