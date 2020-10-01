import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([
    { name: "Learn Angular", category: "working" },
    { name: "Learn React", category: "working" },
    { name: "Vue", category: "done" },
    { name: "Firebase", category: "done" },
    { name: "Improve Mongo skills", category: "todo" },
    { name: "Deep dive into AWS", category: "todo" },
    { name: "Azure", category: "todo" },
  ]);

  const getDraggableDiv = (
    t // generates & returns a single draggable <div>
  ) => (
    <div
      key={t.name}
      onDragStart={(e) => e.dataTransfer.setData("name", t.name)}
      draggable
      className="draggableTaskDiv"
    >
      {t.name}
    </div>
  );

  const [working, setWorking] = useState([]);
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);

  const onDrop = (e, cat) => {
    //gets called when user drops the draggable <div>
    const name = e.dataTransfer.getData("name");
    setTasks(
      //update the state, useEffect() is fired after this
      tasks.map((task) =>
        task.name === name ? { name: task.name, category: cat } : task
      )
    );
  };

  useEffect(() => {
    const filteredTasks = (
      cat // get the tasks for a given category
    ) => tasks.filter((task) => task.category === cat);

    const generateList = (
      cat // get the draggable <div> list for a given category
    ) => filteredTasks(cat).map((t) => getDraggableDiv(t));

    setWorking(generateList("working")); //update the state
    setTodo(generateList("todo"));
    setDone(generateList("done"));
  }, [tasks]); //re-render each time user drags & drops, ( or initially )

  return (
    <div className="container">
      {/* <h2 className="header">DRAG & DROP DEMO</h2> */}
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
