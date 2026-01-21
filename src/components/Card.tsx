import { Box, Typography } from "@cpqd-quati/react";

interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <Box
      background="white"
      padding="var(--spacing-4)"
      borderRadius="md"
      boxShadow="0 2px 4px rgba(0,0,0,0.1)"
      transition="transform 0.2s ease"
      _hover={{ transform: "translateY(-5px)" }}
    >
      <Box marginBottom="1rem" color="#007bff" fontSize="var(--spacing-8)">
        <Typography variant="title6">{title}</Typography>
      </Box>
      <Typography variant="body" lineHeight={1.6}>
        {description}
      </Typography>
    </Box>
  );
}
