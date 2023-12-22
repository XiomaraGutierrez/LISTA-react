import Header from "./components/Header";
import Task from "./components/Task";
// import {TaskList} from "./components/TaskList"
// import "./App.css"
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";

// fetch("http://localhost:5000/tasks", {
//   method: "Get",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

function App() {
  const {  colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  return (
    <>
      <Box
        bg={isDarkMode ? "gray.700" : "white"}
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
            bg={isDarkMode ? "gray.600" : "white"}
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
