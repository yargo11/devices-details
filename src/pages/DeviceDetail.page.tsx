import { useDevices } from "../services/api";
import { DeviceDetailTemplate } from "../templates/DeviceDetail.template";

interface DeviceDetailPageProps {
  deviceId: string;
}

export function DeviceDetailPage({ deviceId }: DeviceDetailPageProps) {
  const { data: device, isLoading, isError, error } = useDevices(deviceId);

  if (isLoading) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Loading device details...</h2>
      </div>
    );
  }

  if (isError || !device) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Device Not Found</h1>
        <p>
          {error
            ? error.message
            : `Device with ID "${deviceId}" was not found.`}
        </p>
      </div>
    );
  }

  return <DeviceDetailTemplate device={device} />;
}
