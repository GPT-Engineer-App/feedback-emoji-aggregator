import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.800" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box color="white" fontWeight="bold" fontSize="xl">
          Demo App
        </Box>
        <Flex alignItems="center">
          <NavLink to="/">
            <Button variant="link" color="white" mr={4}>
              Home
            </Button>
          </NavLink>
          <NavLink to="/create">
            <Button variant="link" color="white" mr={4}>
              Create Demo
            </Button>
          </NavLink>
          <NavLink to="/view">
            <Button variant="link" color="white">
              View Demos
            </Button>
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;