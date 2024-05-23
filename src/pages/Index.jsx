import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={6}>
        Welcome to the Demo App
      </Heading>
      <Text fontSize="xl" mb={6}>
        Create and view demos, react with emojis, and provide feedback.
      </Text>
      <Flex justifyContent="center">
        <NavLink to="/create">
          <Button colorScheme="teal" size="lg" mr={4}>
            Create Demo
          </Button>
        </NavLink>
        <NavLink to="/view">
          <Button colorScheme="teal" size="lg">
            View Demos
          </Button>
        </NavLink>
      </Flex>
    </Box>
  );
};

export default Index;