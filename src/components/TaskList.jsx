// import { useState } from "react";
import Tasks from "./Task";
import CreateToDo from "./CreateToDo";
import "./TaskListStyle.css";
import Icon from "@mdi/react";
import { mdiTrashCanOutline, mdiNoteEditOutline } from "@mdi/js";

export const TaskList = () => {
 
  const listItems = Tasks.map((task) => (
    <div key={task.id}>
      <div className="cardforlist">
        <input
          type="checkbox"
          checked={task.completed ? true : false}
          key={task.id}
         
          className="btn"
        ></input>
        <div
          style={{
            opacity: task.completed ? "35%" : "100%",
            color: "black",
          }}
        >
          {task.title}
        </div>

        <div className="icon">
          <button className="btniconedit">
            <Icon path={mdiNoteEditOutline} size={1} color={" #646cff"} />
          </button>

          <button
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          >
            <Icon path={mdiTrashCanOutline} size={1} color={"#e63739"} />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="cardList">
      <CreateToDo />
      <ul>{listItems}</ul>;
    </div>
  );
};
