import { Container, Text, VStack, Box, Heading, Button, HStack, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box textAlign="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://via.placeholder.com/150"
            alt="Profile Image"
            mb={4}
          />
          <Heading as="h1" size="2xl" mb={2}>
            John Doe
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Full Stack Developer
          </Text>
        </Box>
        <Text fontSize="md" textAlign="center" maxW="lg">
          Passionate about building scalable web applications and always eager to learn new technologies. Let's connect and create something amazing together!
        </Text>
        <HStack spacing={4}>
          <Button as="a" href="https://github.com" target="_blank" leftIcon={<FaGithub />} colorScheme="teal" variant="outline">
            GitHub
          </Button>
          <Button as="a" href="https://linkedin.com" target="_blank" leftIcon={<FaLinkedin />} colorScheme="teal" variant="outline">
            LinkedIn
          </Button>
          <Button as="a" href="https://twitter.com" target="_blank" leftIcon={<FaTwitter />} colorScheme="teal" variant="outline">
            Twitter
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;