import { Box, Text, keyframes } from "@chakra-ui/react";

function Header() {
  const animation = keyframes`
    to {
      background-position: 200% center;
    } 
  `;
  return (
    <Box>
      <Text
        fontSize={"40px"}
        letterSpacing={"3x"}
        fontWeight={"bold"}
        margin={"10px"}
        bgGradient="linear(to-r, #000000,rgb(37, 150, 190))"
        bgClip="text"
        backgroundSize="200% auto"
        animation={`${animation} 2s linear infinite`}
      >
        To-Do App
      </Text>
    </Box>
  );
}
export default Header;
