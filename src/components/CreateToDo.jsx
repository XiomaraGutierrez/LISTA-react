import Icon from "@mdi/react";
import "./CreateToDoStyle.css";
import { mdiNotePlus } from "@mdi/js";

function CreateToDo() {
  return (
    <div className="createtodo">
      <textarea
        placeholder="crear nueva tarea"
        className="input"
        cols={25}
        rows={4}
        maxLength={100}
      />
      <button className="btniconadd">
      <Icon path={mdiNotePlus} size={1} color={"#04caf1"}/>
      </button>
    </div>
  );
}
export default CreateToDo;
