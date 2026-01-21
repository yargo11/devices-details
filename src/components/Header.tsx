import { Link } from "@tanstack/react-router";
import { Box, Typography } from "@cpqd-quati/react";

export function Header() {
  return (
    <Box
      backgroundColor="var(--neutral-50)"
      borderBottom="1px solid #e9ecef"
      padding="1rem 0"
      boxShadow="0 2px 4px rgba(0,0,0,0.1)"
    >
      <Box
        maxWidth="1200px"
        margin="0 auto"
        padding="0 2rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="title5" fontWeight="semiBold">
          Device Details
        </Typography>
        <Box as="nav" display="flex" gap="1.5rem">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Box>
      </Box>
    </Box>
  );
}
