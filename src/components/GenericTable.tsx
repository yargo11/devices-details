import { Box, Button, DataTable } from "@cpqd-quati/react";
import type { DeviceProps } from "../types/devices";
import { GenericService } from "../services/GenericServices";
import { useNavigate } from "@tanstack/react-router";

interface Column<T = Record<string, unknown>> {
  field: keyof T | string;
  headerName: string;
  filter?: boolean;
  sortable?: boolean;
}

interface GenericTableProps<T extends { id: string } = { id: string }> {
  columns: Column<T>[];
  paginationPageSize: number;
  rowData: DeviceProps[];
}

export default function GenericTable<
  T extends { id: string } = { id: string },
>({ columns, paginationPageSize, rowData }: GenericTableProps<T>) {
  const navigate = useNavigate();

  return (
    <Box
      style={{
        width: "1268px",
      }}
    >
      <DataTable
        animateRows
        columnDefs={
          columns as unknown as Parameters<typeof DataTable>[0]["columnDefs"]
        }
        pagination
        paginationPageSize={paginationPageSize}
        rowData={rowData}
        setRowData={function TGe() {}}
        height={GenericService.calculateHeight(rowData)}
        ActionButtonsComponent={(params) => (
          <Button
            iconName={"Search"}
            size="sm"
            variant="tertiary"
            aria-label={"Detalhes"}
            onClick={() =>
              navigate({
                to: "/device-detail/$id",
                params: { id: params.params.id },
              })
            }
          />
        )}
      />
    </Box>
  );
}
