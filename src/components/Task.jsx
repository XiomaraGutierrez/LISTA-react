import { useState } from "react";
import TaskItem from "./TaskItem";
import { Box, Input } from "@chakra-ui/react";
import Icon from "@mdi/react";
import { mdiNotePlusOutline} from "@mdi/js";


function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  fetch("http://localhost:5000/tasks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setTasks(data)
    })
    .catch((err) => {
      console.error("Ocurrio un error:" + err);
    });

  const handleAddTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (task) => {
    const updatedTasks = tasks.filter((t) => t !== task);
    setTasks(updatedTasks);
  };

  const handleUpdateTask = (task) => {
    const updatedTasks = tasks.map((t) => (t === task ? newTask : t));
    setTasks(updatedTasks);
  };

  return (
    <div className="tasks">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        w="425px"
      >
        <Input
          type="text"
          w="300px"
          border="solid 1px"
          placeholder="crear nueva tarea"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />        
      <button onClick={handleAddTask}>
      <Icon path={mdiNotePlusOutline} size={1.2} color={"#04caf1"} />
      </button>
      </Box>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onDelete={handleDeleteTask}
            onUpdate={handleUpdateTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
