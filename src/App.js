import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    tasks: [
      { name: "Learn Angular in 1 month", category: "working" },
      { name: "React", category: "working" },
      { name: "Vue", category: "done" },
      { name: "Firebase", category: "done" },
      { name: "Mongo", category: "todo" },
      { name: "AWS", category: "todo" },
      { name: "Azure", category: "todo" },
    ],
  };
  onDrop = (e, cat) => {
    const name = e.dataTransfer.getData("name");
    this.setState({
      ...this.state,
      ...this.state.tasks.filter((task) => {
        if (task.name === name) {
          task.category = cat;
        }
        return task;
      }),
    });
  };

  render() {
    var tasks = {
      working: [],
      todo: [],
      done: [],
    };
    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={(e) => e.dataTransfer.setData("name", t.name)}
          draggable
          className="draggableTaskDiv"
        >
          {t.name}
        </div>
      );
    });

    return (
      <div className="container">
        {/* <h2 className="header">DRAG & DROP DEMO</h2> */}
        <div
          className="column working"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => this.onDrop(e, "working")}
        >
          <div className="title">Working</div>
          <div className="listDiv">{tasks.working}</div>
        </div>
        <div
          className="column todo"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => this.onDrop(e, "todo")}
        >
          <div className="title">To-do</div>
          <div className="listDiv">{tasks.todo}</div>
        </div>
        <div
          className="column done"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => this.onDrop(e, "done")}
        >
          <div className="title">Done</div>
          <div className="listDiv">{tasks.done}</div>
        </div>
      </div>
    );
  }
}
