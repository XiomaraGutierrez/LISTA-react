import { useState } from "react";
import TaskItem from "./TaskItem";
import { Box, IconButton, Input, useColorMode } from "@chakra-ui/react";
import { mdiNotePlusOutline} from "@mdi/js";
import Icon from "@mdi/react";


function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const { colorMode } = useColorMode();

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
      setNewTask(" ");
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
        <Input   /* texto para recibir la tarea*/ 
          
          type="text"
          w="300px"
          border="solid 1px"
          placeholder="crea una nueva tarea"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          
        />        
         <IconButton    /*  boton de añadir una nueva tarea  */
            bg="none"
            onClick={handleAddTask}
            icon={
              colorMode === "light" ? (
                <Icon path={mdiNotePlusOutline} size={1.2} color="#04caf1" />
              ) : (
                <Icon path={mdiNotePlusOutline} size={1.2} color="#04f1dd" />
              )
            }
          />      
      </Box> 
      
      <ul>
        {tasks.map((task, index) => (/* hace la lista de las actividades */
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



