import { useState } from "react";
// import "./TaskItemStyle.css"
import PropTypes from "prop-types";
import {
  Checkbox,
  Text,
  Box,
  UnorderedList,
  List,
  Stack,
  useColorMode,
  Input,
  IconButton,
} from "@chakra-ui/react";
import {
  mdiCheckDecagram,
  mdiTrashCanOutline,
  mdiNoteEditOutline,
} from "@mdi/js";
import Icon from "@mdi/react";

function TaskItem({ task, onDelete, onUpdate }) {
  TaskItem.propTypes = {
    task: PropTypes.shape({
      title: PropTypes.string,
      
    }).isRequired, // Ejemplo: Se espera que 'task' sea una cadena y sea requerida.
    onDelete: PropTypes.func.isRequired, // Ejemplo: Se espera que 'onDelete' sea una función y sea requerida.
    onUpdate: PropTypes.func.isRequired, // Ejemplo: Se espera que 'onUpdate' sea una función y sea requerida.
  };

  const [isEditing, setEditing] = useState(null);
  const [editedTask, setEditedTask] = useState(task);
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const handleEdit = (title) => {
    setEditing(true);
    setEditedTask(task[title]);
  };

  const handleSave = () => {
    onUpdate(editedTask);
    setEditing(null);
  };

  return (
    <Box>
      <UnorderedList display="flex" flexDirection="row">
        <List
          display="flex"
          w="400px"
          justifyContent="space-between"
          alignItems="center"
          marginTop="10px"
          bg={isDarkMode ? "#eeeeef80" : "#eeeeef"}
          borderRadius={5}
          marginRight={30}
        >
          <Stack>
            <Checkbox
              colorScheme="green"
              size="lg"
              bg="white"
              borderColor={"transparent"}
              left={5}
              borderRadius={20}
              cursor={"pointer"} 
            />
          </Stack>
          <Text w="200px" textColor={"black"}>
            {task.title}
          </Text>
         
         
          <IconButton
                bg="none"
                onClick={() => onDelete(task)}
               
                icon={
                  colorMode === "light" ? (
                    <Icon
                      path={mdiTrashCanOutline}
                      size={1.2}
                      color="#e63739"
                    />
                  ) : (
                    <Icon path={mdiTrashCanOutline} size={1.2} color="#e63739" />
                  )
                }
              // if ( onDelete:true ) delete Checkbox   
              />         
        </List>
      </UnorderedList>      
    </Box>
  );
}

export default TaskItem;
