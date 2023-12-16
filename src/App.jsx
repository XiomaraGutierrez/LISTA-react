import Header from "./components/Header";
import Task from "./components/Task";
// import {TaskList} from "./components/TaskList"
// import "./App.css"
import { Box, SimpleGrid } from "@chakra-ui/react";

// fetch("http://localhost:5000/tasks", {
//   method: "Get",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

function App() {
  return (
    <>
      <Box
        bg="black"
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        w="auto"
        h="100vh"
      >
        <SimpleGrid>
          <Box
            boxShadow="dark-lg"
            display="flex"
            flexDirection="column"
            border="solid"
            borderRadius="15px"
            w="750px"
            overflow="auto"
            bgGradient="linear(to-r, green.400, yellow.500)"
          >
          <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          >
            <Header />
          </Box>

            <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            margin={"30px"}
            >
              <Task />
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
export default App;
