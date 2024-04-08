import { Box, Text, keyframes } from "@chakra-ui/react";

function Header() {
  
  return (
    <Box>
      <Text
        fontSize={"40px"}
        letterSpacing={"2x"}
        fontWeight={"bold"}
        margin={"10px"}
        bgGradient="linear( #60EA4A,#4998EB)"
        bgClip="text"
        backgroundSize="200% auto"
        >
        Lista de pendientes
      </Text>
    </Box>
  );
}
export default Header;
