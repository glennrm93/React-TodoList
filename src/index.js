import React from "react";
import ReactDOM from "react-dom";
import { Input } from "./input";
import { ToDoList } from "./todolist";
import { DateHeader } from "./date";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
    this.handleClick = this.handleClick.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  handleClick(e) {
    let input = document.querySelector("#new-item").value;
    if (this.state.list.includes(input)) {
      alert("Item already added!");
    } else if (input === "") {
      alert("Please enter a value!");
    } else {
      this.setState({
        list: this.state.list.concat([input])
      });
    }
    document.querySelector("#new-item").value = "";
  }
  completeItem(e) {
    let element = document.querySelector("#item-" + e);
    element.style.color = "#bbb";
    element.style.textDecoration = "line-through";
  }
  removeItem(e) {
    let list = this.state.list;
    list.splice(e, 1);
    this.setState({
      list: list
    });
  }
  render() {
    return (
      <div className="container">
        <DateHeader />
        <Input handleClick={this.handleClick} />
        <ToDoList
          list={this.state.list}
          completeitem={this.completeItem}
          removeitem={this.removeItem}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
