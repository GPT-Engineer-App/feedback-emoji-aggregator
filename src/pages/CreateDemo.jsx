import { Box, Heading, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";

const CreateDemo = () => {
  const [headline, setHeadline] = useState("");

  const handleCreateDemo = () => {
    // Logic to create a new demo and save to the database
    console.log("Demo created with headline:", headline);
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Create a New Demo
      </Heading>
      <FormControl id="headline" mb={4}>
        <FormLabel>Headline</FormLabel>
        <Input
          type="text"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="teal" size="lg" width="full" onClick={handleCreateDemo}>
        Create Demo
      </Button>
    </Box>
  );
};

export default CreateDemo;