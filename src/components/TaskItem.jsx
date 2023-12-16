import { useState } from "react";
// import "./TaskItemStyle.css"
import PropTypes from "prop-types";
import { Box} from "@chakra-ui/react";


function TaskItem({ task, onDelete, onUpdate }) {
  TaskItem.propTypes = {
    task: PropTypes.shape({
      name: PropTypes.string,
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
            <input type="checkbox" className="btn">
           
            </input>
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button onClick={handleSave}>Guardar</button>
              </>
            ) : (
              <>
                {task.name}
                <button onClick={handleEdit}>Editar</button>
              </>
            )}
            <button onClick={() => onDelete(task)}>Borrar</button>
          </ul>
        </div>
    </Box>
  );
}

export default TaskItem;
