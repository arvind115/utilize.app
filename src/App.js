import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([
    { name: "Learn Angular", category: "working", id: 0 },
    { name: "Learn React", category: "working", id: 1 },
    { name: "Vue", category: "done", id: 2 },
    { name: "Firebase", category: "done", id: 3 },
    { name: "Improve Mongo skills", category: "todo", id: 4 },
    { name: "Deep dive into AWS", category: "todo", id: 5 },
    { name: "Azure", category: "todo", id: 6 },
  ]);

  const [working, setWorking] = useState([]);
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);

  const getDraggableDiv = (
    t // generates & returns a single draggable <div>
  ) => (
    <div
      key={t.id}
      onDragStart={(e) => e.dataTransfer.setData("id", t.id)}
      draggable
      className="draggableTaskDiv"
    >
      {t.name}
    </div>
  );

  const onDrop = (e, cat) => {
    //gets called when user drops the draggable <div>
    const id = e.dataTransfer.getData("id");
    setTasks(
      //update the state, useEffect() is fired after this
      tasks.map((task) =>
        task.id == id ? { name: task.name, category: cat, id: task.id } : task
      )
    );
  };

  useEffect(() => {
    // get the tasks for a given category
    const filteredTasks = (cat) =>
      tasks.filter((task) => task.category === cat);

    // get the draggable <div> list for a given category
    const generateList = (cat) =>
      filteredTasks(cat).map((t) => getDraggableDiv(t));

    setWorking(generateList("working")); //update the state
    setTodo(generateList("todo"));
    setDone(generateList("done"));
  }, [tasks]); //re-render each time user drags & drops, ( or initially )

  return (
    <div className="container">
      <div
        className="column working"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, "working")}
      >
        <div className="title">Working</div>
        <div className="listDiv">
          {working.length > 0 ? (
            working
          ) : (
            <p style={{ color: "red" }}>Nothing here</p>
          )}
        </div>
      </div>
      <div
        className="column todo"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, "todo")}
      >
        <div className="title">To-do</div>
        <div className="listDiv">
          {" "}
          {todo.length > 0 ? (
            todo
          ) : (
            <p style={{ color: "red" }}>Nothing here</p>
          )}
        </div>
      </div>
      <div
        className="column done"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, "done")}
      >
        <div className="title">Done</div>
        <div className="listDiv">
          {" "}
          {done.length > 0 ? (
            done
          ) : (
            <p style={{ color: "red" }}>Nothing here</p>
          )}
        </div>
      </div>
    </div>
  );
}
