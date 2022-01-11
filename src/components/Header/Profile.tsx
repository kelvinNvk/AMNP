import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
    { showProfileData && (
      <Box mr="4" textAlign="right">
        <Text>Kelvin Eduardo</Text>
          <Text color="gray.300" fontSize="small">
            kelvin@gmail.com
          </Text>
      </Box>
    )}

        <Avatar size="md" name="Kelvin Eduardo" src="https://avatars.githubusercontent.com/u/91850887?s=400&v=4" />
</Flex>
  );
}