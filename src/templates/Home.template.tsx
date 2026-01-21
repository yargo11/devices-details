import type { DeviceProps } from "../types/devices";
import { Box, Typography } from "@cpqd-quati/react";
import GenericTable from "../components/GenericTable";
import Card from "../components/Card";
import { GenericService } from "../services/GenericServices";

interface HomeTemplateProps {
  title: string;
  description: string;
  devices: DeviceProps[];
  isLoading?: boolean;
  isError?: boolean;
}

export function HomeTemplate({
  title,
  description,
  devices,
  isLoading,
  isError,
}: HomeTemplateProps) {
  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Nome",
      filter: true,
      sortable: true,
    },
    {
      field: "status",
      headerName: "Status",
      filter: true,
      sortable: true,
    },
    {
      field: "type",
      headerName: "Tipo",
      filter: true,
      sortable: true,
    },
    {
      field: "ip",
      headerName: "IP",
      sortable: true,
    },
    {
      field: "last_seen",
      headerName: "Última Visualização",
      sortable: true,
      cellRenderer: (params: { data: DeviceProps }) =>
        GenericService.formatDate(params.data.last_seen),
    },
  ];

  const rowData = devices || [];

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box textAlign="center" marginBottom="2rem">
        <Typography variant="title1" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="title3" fontWeight="bold">
          {description}
        </Typography>
      </Box>
      <Box textAlign="center">
        <Box marginBottom="var(--spacing-8)">
          {isLoading ? (
            <Box
              textAlign="center"
              padding="2rem"
              backgroundColor="var(--neutral-50)"
              borderRadius="8px"
            >
              <Typography variant="title4" color="var(--neutral-500)">
                Carregando dados da tabela...
              </Typography>
            </Box>
          ) : isError ? (
            <Box
              textAlign="center"
              padding="2rem"
              backgroundColor="var(--error-50)"
              borderRadius="8px"
            >
              <Typography variant="title4" color="var(--error-600)">
                Xii, algo deu errado...
              </Typography>
            </Box>
          ) : (
            <GenericTable
              columns={columns}
              rowData={rowData}
              paginationPageSize={10}
            />
          )}
        </Box>

        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gap="2rem"
          marginTop="3rem"
        >
          <Card
            title="Device Management"
            description="Manage and monitor all your devices in one place."
          />
          <Card
            title="Real-time Data"
            description="Get real-time information about device status and performance."
          />
          <Card
            title="Analytics"
            description="Access detailed analytics and reports for better insights."
          />
        </Box>
      </Box>
    </Box>
  );
}
