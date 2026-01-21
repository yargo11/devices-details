import { Badge, Box, IconButton, Typography } from "@cpqd-quati/react";
import type { DeviceProps } from "../types/devices";
import { GenericService } from "../services/GenericServices";
import { useNavigate } from "@tanstack/react-router";

interface DeviceDetailTemplateProps {
  device: DeviceProps;
}

export function DeviceDetailTemplate({ device }: DeviceDetailTemplateProps) {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      max-width="1000px"
      margin="0 auto"
      padding="2rem"
      gap={"var(--spacing-8)"}
    >
      <Box
        background={"var(--neutral-50)"}
        borderRadius={"md"}
        boxShadow="0 2px 4px rgba(0,0,0,0.1)"
        overflow="hidden"
      >
        <Box
          background="var(--neutral-200)"
          padding="2rem"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #e9ecef"
        >
          <Typography variant="title4" fontWeight="semiBold">
            {device.name}
          </Typography>
          <Badge
            backgroundColor={GenericService.fromStatustoColor(device.status)}
            borderRadius={"3xl"}
            padding="0.5rem 1rem"
          >
            {device.status.toUpperCase()}
          </Badge>
        </Box>

        <Box display="grid" gridTemplateColumns="1fr 1fr" gap="0">
          <Box
            display={"flex"}
            flexDir={"column"}
            padding="2rem"
            borderRight="1px solid #e9ecef"
            gap={"var(--spacing-4)"}
          >
            <Typography
              variant="title5"
              fontWeight="semiBold"
              color="var(--neutral-800)"
              marginBottom="1rem"
            >
              Basic information
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              borderBottom="1px solid #f8f9fa"
            >
              <Typography
                variant="body"
                fontWeight="medium"
                color="var(--neutral-800)"
              >
                Device ID:
              </Typography>
              <Typography
                variant="body"
                fontWeight="medium"
                color="var(--neutral-800)"
              >
                {device.id}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              borderBottom="1px solid #f8f9fa"
            >
              <Typography
                variant="body"
                fontWeight="medium"
                color="var(--neutral-800)"
              >
                Type:
              </Typography>
              <Typography
                variant="body"
                fontWeight="medium"
                color="var(--neutral-800)"
              >
                {device.type}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              borderBottom="1px solid #f8f9fa"
            >
              <Typography
                variant="body"
                fontWeight="medium"
                color="var(--neutral-800)"
              >
                Location:
              </Typography>
              <Typography
                variant="body"
                fontWeight="medium"
                color="var(--neutral-800)"
              >
                {device.location}
              </Typography>
            </Box>
          </Box>

          <Box
            display={"flex"}
            flexDir={"column"}
            padding="2rem"
            borderRight="1px solid #e9ecef"
            gap={"var(--spacing-4)"}
          >
            <Typography
              variant="title5"
              fontWeight="semiBold"
              color="var(--neutral-800)"
              marginBottom="1rem"
            >
              History
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              borderBottom="1px solid #f8f9fa"
            >
              <Typography
                variant="body"
                fontWeight="medium"
                color="var(--neutral-800)"
              >
                Last Seen:
              </Typography>
              <Typography
                variant="body"
                fontWeight="medium"
                color="var(--neutral-800)"
              >
                {device.last_seen}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <IconButton
        iconName="ArrowLeft"
        size="lg"
        aria-label="Voltar"
        variant="secondary"
        onClick={() => navigate({ to: "/" })}
      >
        Voltar
      </IconButton>
    </Box>
  );
}
