import { createLazyFileRoute } from "@tanstack/react-router";
import { DeviceDetailPage } from "../pages/DeviceDetail.page";

export const Route = createLazyFileRoute("/device-detail/$id")({
  component: DeviceDetailPageRoute,
});

function DeviceDetailPageRoute() {
  const { id } = Route.useParams();
  return <DeviceDetailPage deviceId={id} />;
}
