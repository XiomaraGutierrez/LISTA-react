import { useState } from "react";
// import "./TaskItemStyle.css"
import PropTypes from "prop-types";
import { Checkbox, Text, Box} from "@chakra-ui/react";
import { mdiCheckDecagram, mdiTrashCanOutline, mdiNoteEditOutline } from "@mdi/js";
import Icon from "@mdi/react";


function TaskItem({ task, onDelete, onUpdate }) {
  TaskItem.propTypes = {
    task: PropTypes.shape({
      title: PropTypes.string,
      // Agrega aquí cualquier otra prop que tu objeto 'task' pueda tener
    }).isRequired, // Ejemplo: Se espera que 'task' sea una cadena y sea requerida.
    onDelete: PropTypes.func.isRequired, // Ejemplo: Se espera que 'onDelete' sea una función y sea requerida.
    onUpdate: PropTypes.func.isRequired, // Ejemplo: Se espera que 'onUpdate' sea una función y sea requerida.
  };

  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onUpdate(editedTask);
    setEditing(false);
  };

  return (
    <Box>
        <div className="cardforlist">
          <ul>
          <Checkbox colorScheme="green" size="lg" bg="white" borderColor={"transparent"} borderStyle={"dashed"}  borderRadius={20} cursor={"pointer"}/>

          <Text w="200px" >
          {task.title}
        </Text>
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button onClick={handleSave}>
                <Icon path={mdiCheckDecagram} size={1.2} />
                </button>
              </>
            ) : (
              <>
                <button onClick={handleEdit}>
                <Icon path={mdiNoteEditOutline} size={1} color={"#646cff"} />
                </button>
              </>
            )}
            

            <button onClick={() => onDelete(task)}>
            <Icon path={mdiTrashCanOutline} size={1} color={"#e63739"} />
            </button>
          </ul>
        </div>
    </Box>
  );
}

export default TaskItem;
