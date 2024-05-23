import { Box, Heading, Text, Button, Flex, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { FaSmile, FaFrown, FaMeh } from "react-icons/fa";

const ViewDemo = () => {
  const [feedback, setFeedback] = useState("");
  const [reactions, setReactions] = useState({ smile: 0, meh: 0, frown: 0 });

  const handleReaction = (type) => {
    setReactions((prevReactions) => ({
      ...prevReactions,
      [type]: prevReactions[type] + 1,
    }));
  };

  const handleFeedbackSubmit = () => {
    // Logic to submit feedback to the database
    console.log("Feedback submitted:", feedback);
    setFeedback("");
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Demo Title
      </Heading>
      <Text fontSize="lg" mb={4}>
        Aggregate Reactions:
      </Text>
      <Flex justifyContent="space-around" mb={6}>
        <Button leftIcon={<FaSmile />} onClick={() => handleReaction("smile")}>
          {reactions.smile}
        </Button>
        <Button leftIcon={<FaMeh />} onClick={() => handleReaction("meh")}>
          {reactions.meh}
        </Button>
        <Button leftIcon={<FaFrown />} onClick={() => handleReaction("frown")}>
          {reactions.frown}
        </Button>
      </Flex>
      <Textarea
        placeholder="Write your feedback here..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        mb={4}
      />
      <Button colorScheme="teal" size="lg" width="full" onClick={handleFeedbackSubmit}>
        Submit Feedback
      </Button>
    </Box>
  );
};

export default ViewDemo;