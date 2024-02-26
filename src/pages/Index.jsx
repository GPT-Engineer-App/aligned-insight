import React from "react";
import { Box, Container, Heading, Text, SimpleGrid, Image, Flex, VStack, Icon, Button, useColorModeValue } from "@chakra-ui/react";
import { FaBrain, FaBullseye, FaCalendarCheck, FaHandsHelping, FaLightbulb, FaRegChartBar } from "react-icons/fa";

const Index = () => {
  const Feature = ({ title, icon, text }) => {
    return (
      <VStack>
        <Icon as={icon} w={10} h={10} />
        <Text fontWeight="600">{title}</Text>
        <Text textAlign="center">{text}</Text>
      </VStack>
    );
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Elden: Align, Analyze, Achieve
        </Heading>
        <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.200")}>
          The AI-Powered Business Alignment OS
        </Text>
        <Text fontSize="md" color={useColorModeValue("gray.600", "gray.200")}>
          Achieve more, together, with the help of AI
        </Text>
      </VStack>

      <Box py={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature icon={FaBullseye} title="Breakthrough Alignment" text="Align individual, team, and company goals seamlessly. AI suggests relevant goals, identifies misalignments, and ensures everyone pulls in the same direction." />
          <Feature icon={FaCalendarCheck} title="Effortless Follow-up" text="Ditch tedious progress reports. Elden's central repository tracks tasks, agreements, and activities, with AI monitoring progress and prompting timely action." />
          <Feature icon={FaRegChartBar} title="Actionable Insights" text="Stop drowning in data. Elden analyzes your activity, predicts roadblocks, and delivers personalized recommendations and insights to optimize your work." />
          <Feature icon={FaBrain} title="Meetings that Matter" text="No more wasted time. Elden pre-populates agendas with AI-powered suggestions, captures action items in real-time, and tracks follow-up, ensuring focused and productive meetings." />
          <Feature icon={FaHandsHelping} title="Continuous Improvement" text="Learn and grow as individuals and teams. Elden provides personalized coaching tips, learning resources, and trend analysis to constantly elevate your performance." />
          <Feature icon={FaLightbulb} title="Inspiration" text="The main principles and process fundamentals should be based on best practices for business and people management and efficient leadership." />
        </SimpleGrid>
      </Box>

      <Flex justifyContent="center" my={10}>
        <Button rightIcon={<FaBrain />} colorScheme="teal" variant="outline">
          Discover the Elden Difference
        </Button>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          <Heading as="h3" size="lg" mb={4}>
            Onepager v1
          </Heading>
          <Text fontSize="md" color={useColorModeValue("gray.600", "gray.200")}>
            Elden is more than a tool. It's a partner in your journey to excellence. Visit us today and unleash the power of aligned teams, actionable insights, and continuous improvement.
          </Text>
        </Box>
        <Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMEJ1c2luZXNzfGVufDB8fHx8MTcwODk1NjQ5NHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
      </SimpleGrid>
    </Container>
  );
};

export default Index;
