import Header from "./components/Header";
import Task from "./components/Task";

import { Box, SimpleGrid, useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


function App() {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  return (
    <>
      <Box /*  fondo de  noche y dia */
        bg={isDarkMode ? "#214F6B" : "#FFA07A"}
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        w="auto"
        h="100vh"
      >
        <SimpleGrid>  
          <Box   /*caja delimitante dinamica de la lista */

            boxShadow="dark-lg"
            display="flex"
            flexDirection="column"
            border="solid"
            borderRadius="15px"
            w="750px"
            overflow="auto"
            bg={isDarkMode ? "gray.600" : "AntiqueWhite"}
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
        <IconButton
          icon={  /*color y ubicacion del icono de cambio de modo dia/noche */
            colorMode === "light" ? (
              <MoonIcon boxSize="30px" color={"silver"} />
            ) : (
              <SunIcon boxSize="30px" color={"gold"} />
            )
          }
          onClick={toggleColorMode}
          display="flex"
          justifyContent="center"
          bg="none"
          alignItems="center"
          margin="10px"
        />
      </Box>
    </>
  );
}
export default App;
